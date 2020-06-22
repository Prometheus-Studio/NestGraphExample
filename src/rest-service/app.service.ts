import { Injectable } from "@nestjs/common";
import { FilmDTO } from "src/data/film.dto";
import filmlist from "src/data/filmlist";
import { DataAccess } from "src/data/DataAccess";

@Injectable()
export class AppRestService {
    private readonly dataAccess: DataAccess = new DataAccess(filmlist);

    getAll(): FilmDTO[] {
        return this.dataAccess.getAll();
    }
    getByPosition(position: number): FilmDTO | null {
        return this.dataAccess.getByPosition(position);
    }
    getByYear(year: number): FilmDTO[] {
        return this.dataAccess.getByYear(year);
    }
    getPage(pageSize: number, pageNumber: number): FilmDTO[] {
        return this.dataAccess.getPage(pageSize, pageNumber)
    }

    addItem(item: FilmDTO): boolean {
        return this.dataAccess.addItem(item);
    }
    updateItem(oldPosition: number, item: FilmDTO): boolean {
        return this.dataAccess.updateItem(oldPosition, item);
    }
    deleteItem(position: number): boolean {
        return this.dataAccess.deleteItem(position);
    }
}