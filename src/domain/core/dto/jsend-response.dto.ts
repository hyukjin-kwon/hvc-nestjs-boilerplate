import { ApiProperty } from "@nestjs/swagger";
// import { Type } from "class-transformer"
import { IsString, ValidateNested } from "class-validator";

export class JsendResponseSuccess<T> {
  @ApiProperty({
    required: true,
    description: "API Call response status",
    example: "success",
  })
  @IsString()
  status: string;

  @ApiProperty({
    description: "Data",
    required: true,
  })
  data: T | T[];
}
