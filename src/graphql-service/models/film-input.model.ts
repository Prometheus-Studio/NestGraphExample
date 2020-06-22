import { InputType, Field, Int } from "@nestjs/graphql";
import { FilmRecipe } from "./recipe.model";

@InputType()
export class FilmInput {
    @Field(type => Int, { nullable: false})
    position: number;

    @Field({ nullable: false})
    title: string;

    @Field(type => Int, { nullable: false})
    year: number;

    @Field({ nullable: false})
    rating: number;
}