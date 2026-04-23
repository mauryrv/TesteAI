import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class PastureListItemDto {
  @ApiProperty({ example: "p1" })
  id!: string;

  @ApiProperty({ example: "Pasto Norte" })
  name!: string;

  @ApiProperty({ enum: ["active", "inactive"], example: "active" })
  status!: "active" | "inactive";
}

@ApiTags("Pastures")
@Controller("pastures")
export class PasturesController {
  @Get()
  @ApiOkResponse({ type: [PastureListItemDto] })
  list(): PastureListItemDto[] {
    return [];
  }
}

