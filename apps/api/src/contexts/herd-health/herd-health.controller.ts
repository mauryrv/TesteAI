import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class HealthEventListItemDto {
  @ApiProperty({ example: "he1" })
  id!: string;

  @ApiProperty({ example: "a1" })
  animalId!: string;

  @ApiProperty({ enum: ["vaccine", "treatment"], example: "vaccine" })
  type!: "vaccine" | "treatment";

  @ApiProperty({ example: "2026-04-23T01:00:00.000Z" })
  occurredAt!: string;
}

@ApiTags("HerdHealth")
@Controller("herd-health/events")
export class HerdHealthController {
  @Get()
  @ApiOkResponse({ type: [HealthEventListItemDto] })
  listEvents(): HealthEventListItemDto[] {
    return [];
  }
}

