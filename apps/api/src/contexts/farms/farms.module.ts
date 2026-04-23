import { Module } from "@nestjs/common";
import { FarmsController } from "./farms.controller";

/** Farms / users — tenants and membership (bounded context stub). */
@Module({
  controllers: [FarmsController],
})
export class FarmsModule {}
