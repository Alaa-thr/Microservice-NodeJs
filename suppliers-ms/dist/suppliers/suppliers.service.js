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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const supplier_schema_1 = require("./schema/supplier.schema");
let SuppliersService = class SuppliersService {
    constructor(supplierModel, cacheManager) {
        this.supplierModel = supplierModel;
        this.cacheManager = cacheManager;
    }
    async findAll() {
        const suppliers = await this.supplierModel.find().exec();
        await this.suppliersCache(suppliers);
        return suppliers;
    }
    async findOne(id) {
        return await this.supplierModel.findById(id).exec();
    }
    async suppliersCache(suppliers) {
        const cacheData = await this.cacheManager.get('suppliers');
        if (cacheData) {
            console.log('redis cache');
        }
        else {
            this.setSuppliersCache(suppliers);
        }
    }
    async setSuppliersCache(suppliers) {
        await this.cacheManager.set('suppliers', suppliers, { ttl: 1000 });
        console.log('this is load from the app');
    }
};
SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(supplier_schema_1.Supplier.name)),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object])
], SuppliersService);
exports.SuppliersService = SuppliersService;
//# sourceMappingURL=suppliers.service.js.map