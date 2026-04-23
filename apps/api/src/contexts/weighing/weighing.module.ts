import { Module } from "@nestjs/common";
import { WeighingController } from "./weighing.controller";

/** Weighing — weights and derived metrics (bounded context stub). */
@Module({
  controllers: [WeighingController],
})
export class WeighingModule {}
