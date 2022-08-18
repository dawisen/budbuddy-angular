"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantController = void 0;
const common_1 = require("@nestjs/common");
const plant_service_1 = require("../service/plant.service");
const plant_entity_1 = require("../plant.entity");
let PlantController = class PlantController {
    constructor(PlantService) {
        this.PlantService = PlantService;
    }
    async getAll() {
        return await this.PlantService.getAll();
    }
    async getOne(idObject) {
        return await this.PlantService.getOne(idObject.id);
    }
    async create(plant) {
        return await this.PlantService.create(plant);
    }
    async update(id, plant) {
        return await this.PlantService.update(id, plant);
    }
    async delete(id) {
        return await this.PlantService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlantController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlantController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [plant_entity_1.Plant]),
    __metadata("design:returntype", Promise)
], PlantController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, plant_entity_1.Plant]),
    __metadata("design:returntype", Promise)
], PlantController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlantController.prototype, "delete", null);
PlantController = __decorate([
    (0, common_1.Controller)('plants'),
    __metadata("design:paramtypes", [plant_service_1.PlantService])
], PlantController);
exports.PlantController = PlantController;
//# sourceMappingURL=plant.controller.js.map