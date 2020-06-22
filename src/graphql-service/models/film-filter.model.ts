import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class FilmFilter {
    @Field(type => Int, {nullable: true})
    minPosition?: number;

    @Field(type => Int, {nullable: true})
    maxPosition?: number;

    @Field(type => Int, {nullable: true})
    minYear?: number;

    @Field(type => Int, {nullable: true})
    maxYear?: number;

    @Field({nullable: true})
    minRating?: number;

    @Field({nullable: true})
    maxRating?: number;

    @Field({nullable: true})
    namePart?: string;
}