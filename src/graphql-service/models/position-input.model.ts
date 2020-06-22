import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class PositionInput {
    @Field(type => Int, { nullable: false})
    position: number;
}