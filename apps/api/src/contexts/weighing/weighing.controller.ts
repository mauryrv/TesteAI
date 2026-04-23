import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class WeighingListItemDto {
  id!: string;
  animalId!: string;
  weightKg!: number;
  weighedAt!: string;
}

@ApiTags("Weighing")
@Controller("weighings")
export class WeighingController {
  @Get()
  @ApiOkResponse({ type: [WeighingListItemDto] })
  list(): WeighingListItemDto[] {
    return [];
  }
}

