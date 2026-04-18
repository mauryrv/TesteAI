import { Module } from "@nestjs/common";
import { HealthModule } from "./health/health.module";
import { AnimalsModule } from "./contexts/animals/animals.module";
import { HerdHealthModule } from "./contexts/herd-health/herd-health.module";
import { BreedingModule } from "./contexts/breeding/breeding.module";
import { WeighingModule } from "./contexts/weighing/weighing.module";
import { PasturesModule } from "./contexts/pastures/pastures.module";
import { FarmsModule } from "./contexts/farms/farms.module";

@Module({
  imports: [
    HealthModule,
    AnimalsModule,
    HerdHealthModule,
    BreedingModule,
    WeighingModule,
    PasturesModule,
    FarmsModule,
  ],
})
export class AppModule {}
