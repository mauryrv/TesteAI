import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class BreedingEventListItemDto {
  id!: string;
  animalId!: string;
  type!: "service" | "pregnancy_check" | "calving" | "weaning";
  occurredAt!: string;
}

@ApiTags("Breeding")
@Controller("breeding/events")
export class BreedingController {
  @Get()
  @ApiOkResponse({ type: [BreedingEventListItemDto] })
  listEvents(): BreedingEventListItemDto[] {
    return [];
  }
}

