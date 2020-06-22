import { NotFoundException, BadRequestException } from "@nestjs/common";
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { FilmRecipe } from "./models/recipe.model";
import { AppGraphQLService } from "./app.service";
import { FilmInput } from "./models/film-input.model";
import { FilmUpdateInput } from "./models/film-update-input.model";
import { PositionInput } from "./models/position-input.model";
import { FilmFilter } from "./models/film-filter.model";

@Resolver((of) => FilmRecipe)
export class AppResolver {
    constructor(private readonly appService: AppGraphQLService) { }

    @Query(returns => FilmRecipe)
    async findByPosition(@Args('position') position: string): Promise<FilmRecipe> {
        const data = this.appService.getByPosition(parseInt(position, 10));
        if (!data) {
            throw new NotFoundException('No item by given position:' + position);
        }
        return data
    }

    @Query(returns => [FilmRecipe])
    async findByYear(@Args('year') year: string): Promise<FilmRecipe[]> {
        return this.appService.getByYear(parseInt(year, 10));
    }

    @Query(returns => [FilmRecipe])
    async getPage(
        @Args('pageSize') pageSize: string,
        @Args('pageNumber') pageNumber: string
    ): Promise<FilmRecipe[]> {
        return this.appService.getPage(
            parseInt(pageSize, 10),
            parseInt(pageNumber, 10),
        )
    }

    @Query(returns => [FilmRecipe])
    async filter(
        @Args('filter') filter: FilmFilter
    ): Promise<FilmRecipe[]> {
        return this.appService.getWithFilter(filter);
    }

    @Mutation(returns => FilmRecipe)
    async addItem(@Args('item') item: FilmInput): Promise<FilmRecipe> {
        const result = this.appService.addItem(item);
        if (!result) {
            throw new BadRequestException('Film with given position or title already exists');
        }
        return item;
    }

    @Mutation(returns => FilmRecipe)
    async updateItem(@Args('item') item: FilmUpdateInput): Promise<FilmRecipe> {
        const result = this.appService.updateItem(item.oldPosition, item.film);
        if (!result) {
            throw new BadRequestException('Film with given position or title already exists');
        }
        return item.film;
    }

    @Mutation(returns => FilmRecipe)
    async deleteByPosition(@Args('item') item: PositionInput): Promise<FilmRecipe> {
        const result = this.appService.getByPosition(item.position);
        const deleteResult = this.appService.deleteItem(item.position);
        if (!deleteResult) {
            throw new NotFoundException('Not found by position');
        }
        return result;
    }
}