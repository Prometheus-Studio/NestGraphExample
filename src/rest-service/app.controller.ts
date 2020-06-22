import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Post, Put, Query } from "@nestjs/common";
import { FilmDTO } from "src/data/film.dto";
import { AppRestService } from "./app.service";
import { ByYearInterface } from "./interfaces/by-year.interface";
import { PaginationInterface } from "./interfaces/pagination.iterface";
import { PositionInterface } from "./interfaces/position.interface";
import { UpdateFilmInterface } from "./interfaces/updateFilm.interface";

@Controller('rest')
export class AppRestController {
    constructor(private readonly appService: AppRestService) { }

    @Get()
    async getAll(): Promise<FilmDTO[]> {
        return this.appService.getAll();
    }

    @Get('byPosition')
    async getByPosition(@Query() params: PositionInterface): Promise<FilmDTO | null> {
        const data = this.appService.getByPosition(parseInt(params.position, 10));
        if (!data) {
            throw new NotFoundException('No item by given position:' + params.position);
        }
        return data
    }

    @Get('byYear')
    async getByYear(@Query() params: ByYearInterface): Promise<FilmDTO[]> {
        return this.appService.getByYear(parseInt(params.year, 10));
    }

    @Get('pagination')
    async getPage(@Query() params: PaginationInterface): Promise<FilmDTO[]> {
        return this.appService.getPage(
            parseInt(params.pageSize, 10),
            parseInt(params.pageNumber, 10),
        )
    }

    @Post()
    async addItem(@Body() body: FilmDTO): Promise<void> {
        const result = this.appService.addItem(body);
        if (!result) {
            throw new BadRequestException('Film with given position or title already exists');
        }
        return;
    }

    @Put()
    async updateItem(@Body() body: UpdateFilmInterface): Promise<void> {
        const result = this.appService.updateItem(
            body.oldPosition,
            body.film
        );
        if (!result) {
            throw new BadRequestException('Old position is wrong or film with same title or position exists');
        }
        return;
    }
    @Delete('byPosition')
    async deleteByPosition(@Query() params: PositionInterface): Promise<void> {
        const result = this.appService.deleteItem(
            parseInt(params.position, 10)
        );
        if (!result) {
            throw new NotFoundException('Not found by position');
        }
        return;
    }
}