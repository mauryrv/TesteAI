import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class BreedingEventListItemDto {
  @ApiProperty({ example: "be1" })
  id!: string;

  @ApiProperty({ example: "a1" })
  animalId!: string;

  @ApiProperty({
    enum: ["service", "pregnancy_check", "calving", "weaning"],
    example: "service",
  })
  type!: "service" | "pregnancy_check" | "calving" | "weaning";

  @ApiProperty({ example: "2026-04-23T01:00:00.000Z" })
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

