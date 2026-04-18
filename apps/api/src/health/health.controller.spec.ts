import { Test } from "@nestjs/testing";
import { HealthController } from "./health.controller";

describe("HealthController", () => {
  it("returns ok payload", async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [HealthController],
    }).compile();

    const controller = moduleRef.get(HealthController);
    const body = controller.check();

    expect(body.status).toBe("ok");
    expect(body.service).toBe("controle-gado-api");
    expect(body.apiPrefix).toBe("/api/v1");
    expect(typeof body.timestamp).toBe("string");
  });
});
