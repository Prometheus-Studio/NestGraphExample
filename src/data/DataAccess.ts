import { FilmDTO } from "./film.dto";
import { FilmFilter } from "src/graphql-service/models/film-filter.model";
import { maxHeaderSize } from "http";

export class DataAccess {
    private data: FilmDTO[];

    constructor(data: FilmDTO[]) {
        this.data = data;
    }

    getAll(): FilmDTO[] {
        return this.data;
    }

    getByPosition(position: number): FilmDTO | null {
        return this.data.find(item => item.position === position) || null;
    }

    getByYear(year: number): FilmDTO[] {
        return this.data.filter(item => item.year === year);
    }

    getPage(pageSize: number, pageNumber: number): FilmDTO[] {
        let startIndex = 0;
        if (pageNumber >= 2) {
            startIndex = pageNumber * pageSize;
        }
        const endIndex = startIndex + pageSize;
        return this.data.slice(startIndex, endIndex);
    }

    addItem(item: FilmDTO): boolean {
        if (this.checkFilmExistsByTitleAndPosition(item)) { return false }
        this.data.push(item);
        this.sortDataByPosition();
        return true;
    }

    updateItem(oldPosition: number, item: FilmDTO): boolean {
        // totally not effective way. Don't repeat it at home, please
        const oldItemIndex = this.data.findIndex(film => film.position === oldPosition);
        if (oldItemIndex === -1) {
            return false
        }

        const oldItem = this.data[oldItemIndex];
        this.data.splice(oldItemIndex, 1);

        if (this.checkFilmExistsByTitleAndPosition(item)) {
            this.data.push(oldItem);
            this.sortDataByPosition();
            return false
        }
        this.data.push(item);
        this.sortDataByPosition();
        return true
    }

    deleteItem(position: number): boolean {
        const itemIndex = this.data.findIndex(film => film.position === position);
        if (itemIndex === -1) {
            return false
        }
        this.data.splice(itemIndex, 1);
        return true;
    }

    getWithFilter(filter: FilmFilter): FilmDTO[] {
        const conditions: ((film: FilmDTO) => boolean)[] = [];
        this.addMinMaxConditions(conditions, film => film.position, filter.minPosition, filter.maxPosition);
        this.addMinMaxConditions(conditions, film => film.year, filter.minYear, filter.maxYear);
        this.addMinMaxConditions(conditions, film => film.rating, filter.minRating, filter.maxRating);
        if (filter.namePart) {
            conditions.push(
                (film) => film.title.includes(filter.namePart)
            );
        }
        return this.data.filter(item => conditions.every(condition => condition(item)))
    }
    private addMinMaxConditions(conditions: ((film: FilmDTO) => boolean)[], valueExtractor: ((film: FilmDTO) => number), minValue?: number, maxValue?: number) {
        if (minValue) {
            conditions.push(
                (film) => valueExtractor(film) >= minValue
            )
        }
        if (maxValue) {
            conditions.push(
                (film) => valueExtractor(film) <= maxValue
            )
        }
    }

    private sortDataByPosition(): void {
        this.data.sort((a, b) => a.position > b.position ? 1 :
            (a.position === b.position ? 0 : -1));
    }
    private checkFilmExistsByTitleAndPosition(item: FilmDTO): boolean {
        return this.data.some(film =>
            (film.position === item.position)
            || (film.title === item.title)
        );
    }
}