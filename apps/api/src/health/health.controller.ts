import { Controller, Get } from "@nestjs/common";
import { API_PREFIX } from "@controle-gado/shared";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

class HealthResponseDto {
  status!: "ok";
  service!: string;
  apiPrefix!: string;
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
