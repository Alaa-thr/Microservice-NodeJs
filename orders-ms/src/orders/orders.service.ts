import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderDocument } from './schema/order.schema';
import { Cache } from 'cache-manager';

@Injectable()
export class OrdersService {

  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,// the 'Order' in injectModel is the same name in orders.module in forFeature, we called the registred schema to be able to use the CRUD functions
    @Inject(CACHE_MANAGER) private cacheManager: Cache //for communication with redis cache, the CACHE_MANAGER is a token that will inject the redis store into our constructor and Cache to provide functions to communicate with
  ){}

  async create(createOrderDto: CreateOrderDto) {
    return await new this.orderModel(createOrderDto).save();
  }

  async findAll() {
    const orders = await this.orderModel.find().exec();
    await this.ordersCache(orders);
    return orders;
  }

  async findOne(id: string) {
    return await this.orderModel.findById(id).exec();
  }

  private async ordersCache(orders){
    const cacheData = await this.cacheManager.get('orders'); //get item with key 'orders' from the cache. If the item does not exist in the cache, null will be returned.
    if(cacheData){ // if exist item 'orders' in the cache => do a log
      await this.deleteOrdersCache();
    }else{ // if dosen't exist item 'suppliers' in the cache => create one and do a log
      this.setOrdersCache(orders);
    }
  }
  private async deleteOrdersCache(){
    await this.cacheManager.del('orders');
  }
  private async setOrdersCache(orders){// create new item in the cache with time expiration 1 min (ttl is 5sec per default) and name 'orders'
    await this.cacheManager.set('orders', orders, { ttl: 1000 });
    console.log('this is load from the app');
  }
}
