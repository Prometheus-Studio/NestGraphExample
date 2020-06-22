import { FilmDTO } from "src/data/film.dto";

export interface UpdateFilmInterface {
    oldPosition: number;
    film: FilmDTO;
}