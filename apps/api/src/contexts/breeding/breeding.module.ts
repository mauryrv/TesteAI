import { Module } from "@nestjs/common";
import { BreedingController } from "./breeding.controller";

/** Breeding — reproductive events (bounded context stub). */
@Module({
  controllers: [BreedingController],
})
export class BreedingModule {}
