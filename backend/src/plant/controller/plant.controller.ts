import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { PlantService } from '../service/plant.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Plant } from '../plant.entity';

@Controller('plants')
export class PlantController {
  constructor(private PlantService: PlantService) {}

  @Get()
  async getAll(): Promise<Plant[]> {
    return await this.PlantService.getAll();
  }

  @Get(':id')
  async getOne(@Param() idObject: { id: number }): Promise<Plant> {
    return await this.PlantService.getOne(idObject.id);
  }

  @Post()
  async create(@Body() plant: Plant): Promise<Plant> {
    return await this.PlantService.create(plant);
  }

  @Put(':id')
  async update(@Param() id: number, @Body() plant: Plant): Promise<UpdateResult> {
    return await this.PlantService.update(id, plant);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.PlantService.delete(id);
  }
}
