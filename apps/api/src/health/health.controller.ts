import { Controller, Get } from "@nestjs/common";
import { API_PREFIX } from "@controle-gado/shared";

@Controller("health")
export class HealthController {
  @Get()
  check() {
    return {
      status: "ok",
      service: "controle-gado-api",
      apiPrefix: API_PREFIX,
      timestamp: new Date().toISOString(),
    };
  }
}
