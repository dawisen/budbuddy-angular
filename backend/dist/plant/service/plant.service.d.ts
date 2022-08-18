import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Plant } from '../plant.entity';
export declare class PlantService {
    private PlantRepository;
    constructor(PlantRepository: Repository<Plant>);
    getAll(): Promise<Plant[]>;
    getOne(id: number): Promise<Plant>;
    create(plant: Plant): Promise<Plant>;
    update(id: number, plant: Plant): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
