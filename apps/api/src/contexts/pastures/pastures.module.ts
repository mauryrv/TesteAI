import { Module } from "@nestjs/common";
import { PasturesController } from "./pastures.controller";

/** Pastures — paddocks, lots, movement (bounded context stub). */
@Module({
  controllers: [PasturesController],
})
export class PasturesModule {}
