import { Injectable } from "@nestjs/common";
import { DataAccess } from "src/data/DataAccess";
import filmlist from "src/data/filmlist";
import { FilmDTO } from "src/data/film.dto";
import { FilmRecipe } from "./models/recipe.model";
import { FilmInput } from "./models/film-input.model";
import { FilmFilter } from "./models/film-filter.model";

@Injectable()
export class AppGraphQLService {
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
    getWithFilter(filter: FilmFilter): FilmDTO[] {
        return this.dataAccess.getWithFilter(filter);
    }

    addItem(item: FilmDTO | FilmInput): boolean {
        return this.dataAccess.addItem(item);
    }
    updateItem(oldPosition: number, item: FilmDTO | FilmInput): boolean {
        return this.dataAccess.updateItem(oldPosition, item);
    }
    deleteItem(position: number): boolean {
        return this.dataAccess.deleteItem(position);
    }
}