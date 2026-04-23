import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class AnimalListItemDto {
  id!: string;
  tag!: string;
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

