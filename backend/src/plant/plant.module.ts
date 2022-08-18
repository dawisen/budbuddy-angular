import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantController } from './controller/plant.controller';
import { PlantService } from './service/plant.service';
import { Plant } from './plant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plant], "plantConnection" )],
  providers: [PlantService],
  controllers: [PlantController],
})
export class PlantModule {}
