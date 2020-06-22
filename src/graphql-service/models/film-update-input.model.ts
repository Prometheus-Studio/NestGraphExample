import { InputType, Field, Int } from "@nestjs/graphql";
import { FilmInput } from "./film-input.model";

@InputType()
export class FilmUpdateInput {
    @Field(type => Int, {nullable: false})
    oldPosition: number;
    
    @Field({nullable: false})
    film: FilmInput;
}