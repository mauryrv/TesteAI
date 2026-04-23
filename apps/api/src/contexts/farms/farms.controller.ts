import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class FarmListItemDto {
  id!: string;
  name!: string;
  timezone!: string;
}

@ApiTags("Farms")
@Controller("farms")
export class FarmsController {
  @Get()
  @ApiOkResponse({ type: [FarmListItemDto] })
  list(): FarmListItemDto[] {
    return [];
  }
}

