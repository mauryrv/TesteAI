import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class PastureListItemDto {
  id!: string;
  name!: string;
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

