import { Controller, Get } from "@nestjs/common";
import { API_PREFIX } from "@controle-gado/shared";
import { ApiOkResponse, ApiProperty, ApiTags } from "@nestjs/swagger";

class HealthResponseDto {
  @ApiProperty({ example: "ok" })
  status!: "ok";

  @ApiProperty({ example: "controle-gado-api" })
  service!: string;

  @ApiProperty({ example: "/api/v1" })
  apiPrefix!: string;

  @ApiProperty({ example: "2026-04-23T01:00:00.000Z" })
  timestamp!: string;
}

@ApiTags("Health")
@Controller("health")
export class HealthController {
  @Get()
  @ApiOkResponse({ type: HealthResponseDto })
  check(): HealthResponseDto {
    return {
      status: "ok",
      service: "controle-gado-api",
      apiPrefix: API_PREFIX,
      timestamp: new Date().toISOString(),
    };
  }
}
