import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class HealthEventListItemDto {
  id!: string;
  animalId!: string;
  type!: "vaccine" | "treatment";
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

