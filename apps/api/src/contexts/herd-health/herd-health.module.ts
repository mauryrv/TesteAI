import { Module } from "@nestjs/common";
import { HerdHealthController } from "./herd-health.controller";

/** Herd health — vaccines, treatments (bounded context stub). */
@Module({
  controllers: [HerdHealthController],
})
export class HerdHealthModule {}
