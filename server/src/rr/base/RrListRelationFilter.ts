/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RrWhereInput } from "./RrWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RrListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RrWhereInput,
  })
  @ValidateNested()
  @Type(() => RrWhereInput)
  @IsOptional()
  @Field(() => RrWhereInput, {
    nullable: true,
  })
  every?: RrWhereInput;

  @ApiProperty({
    required: false,
    type: () => RrWhereInput,
  })
  @ValidateNested()
  @Type(() => RrWhereInput)
  @IsOptional()
  @Field(() => RrWhereInput, {
    nullable: true,
  })
  some?: RrWhereInput;

  @ApiProperty({
    required: false,
    type: () => RrWhereInput,
  })
  @ValidateNested()
  @Type(() => RrWhereInput)
  @IsOptional()
  @Field(() => RrWhereInput, {
    nullable: true,
  })
  none?: RrWhereInput;
}
export { RrListRelationFilter };