import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier, SupplierDocument } from './schema/supplier.schema';
import { Cache } from 'cache-manager';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Supplier.name) private readonly supplierModel: Model<SupplierDocument>,// the 'Order' in injectModel is the same name in orders.module in forFeature, we called the registred schema to be able to use the CRUD functions
    @Inject(CACHE_MANAGER) private cacheManager: Cache //for communication with redis cache, the CACHE_MANAGER is a token that will inject the redis store into our constructor and Cache to provide functions to communicate with
  ){}

  async findAll() {
    const suppliers = await this.supplierModel.find().exec();
    await this.suppliersCache(suppliers);
    return suppliers;
  }

  async findOne(id: string) {
    return await this.supplierModel.findById(id).exec();
  }

  private async suppliersCache(suppliers){
    const cacheData = await this.cacheManager.get('suppliers'); //get item with key 'suppliers' from the cache. If the item does not exist in the cache, null will be returned.
    if(cacheData){ // if exist item 'suppliers' in the cache => do a log
      console.log('redis cache');
    }else{ // if dosen't exist item 'suppliers' in the cache => create one and do a log
      this.setSuppliersCache(suppliers);
    }
  }
  private async setSuppliersCache(suppliers){// create new item in the cache with time expiration 1 min (ttl is 5sec per default) and name 'suppliers'
    await this.cacheManager.set('suppliers', suppliers, { ttl: 1000 });
    console.log('this is load from the app');
  }
}
