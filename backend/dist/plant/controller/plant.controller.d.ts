import { PlantService } from '../service/plant.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Plant } from '../plant.entity';
export declare class PlantController {
    private PlantService;
    constructor(PlantService: PlantService);
    getAll(): Promise<Plant[]>;
    getOne(idObject: {
        id: number;
    }): Promise<Plant>;
    create(plant: Plant): Promise<Plant>;
    update(id: number, plant: Plant): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
