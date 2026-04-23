import { Module } from "@nestjs/common";
import { AnimalsController } from "./animals.controller";

/** Animals — identification, lifecycle (bounded context stub). */
@Module({
  controllers: [AnimalsController],
})
export class AnimalsModule {}
