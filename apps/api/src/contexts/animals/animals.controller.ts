import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class AnimalListItemDto {
  @ApiProperty({ example: "a1" })
  id!: string;

  @ApiProperty({ example: "BR-001" })
  tag!: string;

  @ApiProperty({ enum: ["active", "sold", "dead"], example: "active" })
  status!: "active" | "sold" | "dead";
}

@ApiTags("Animals")
@Controller("animals")
export class AnimalsController {
  @Get()
  @ApiOkResponse({ type: [AnimalListItemDto] })
  list(): AnimalListItemDto[] {
    return [];
  }
}

