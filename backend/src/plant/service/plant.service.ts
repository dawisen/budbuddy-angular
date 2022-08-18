import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Plant } from '../plant.entity';

@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(Plant, "plantConnection") private PlantRepository: Repository<Plant>
  ) {}
  async getAll(): Promise<Plant[]> {
    return await this.PlantRepository.find();
  }
  async getOne(id: number): Promise<Plant> {
    return await this.PlantRepository.findOneBy({ id: id });
  }
  async create(plant: Plant): Promise<Plant> {
    return await this.PlantRepository.save(plant);
  }
  async update(id: number, plant: Plant): Promise<UpdateResult> {
    return await this.PlantRepository.update(id, plant);
  }
  async delete(id: number): Promise<DeleteResult> {
    return await this.PlantRepository.delete(id);
  }
}