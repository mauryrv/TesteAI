import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class WeighingListItemDto {
  @ApiProperty({ example: "w1" })
  id!: string;

  @ApiProperty({ example: "a1" })
  animalId!: string;

  @ApiProperty({ example: 312.4 })
  weightKg!: number;

  @ApiProperty({ example: "2026-04-23T01:00:00.000Z" })
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

