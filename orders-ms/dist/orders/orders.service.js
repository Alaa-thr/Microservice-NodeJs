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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const order_schema_1 = require("./schema/order.schema");
let OrdersService = class OrdersService {
    constructor(orderModel, cacheManager) {
        this.orderModel = orderModel;
        this.cacheManager = cacheManager;
    }
    async create(createOrderDto) {
        return await new this.orderModel(createOrderDto).save();
    }
    async findAll() {
        const orders = await this.orderModel.find().exec();
        await this.ordersCache(orders);
        return orders;
    }
    async findOne(id) {
        return await this.orderModel.findById(id).exec();
    }
    async ordersCache(orders) {
        const cacheData = await this.cacheManager.get('orders');
        if (cacheData) {
            await this.deleteOrdersCache();
        }
        else {
            this.setOrdersCache(orders);
        }
    }
    async deleteOrdersCache() {
        await this.cacheManager.del('orders');
    }
    async setOrdersCache(orders) {
        await this.cacheManager.set('orders', orders, { ttl: 1000 });
        console.log('this is load from the app');
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(order_schema_1.Order.name)),
    __param(1, (0, common_1.Inject)(common_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map