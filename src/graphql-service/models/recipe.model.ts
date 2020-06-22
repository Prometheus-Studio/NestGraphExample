import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class FilmRecipe {
    @Field(type => Int, { nullable: false})
    position: number;

    @Field({ nullable: false})
    title: string;

    @Field(type => Int, { nullable: false})
    year: number;

    @Field({ nullable: false})
    rating: number;
}