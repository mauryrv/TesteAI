import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class FarmListItemDto {
  @ApiProperty({ example: "f1" })
  id!: string;

  @ApiProperty({ example: "Fazenda Boa Vista" })
  name!: string;

  @ApiProperty({ example: "America/Sao_Paulo" })
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

