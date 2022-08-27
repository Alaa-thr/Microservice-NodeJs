import { CacheModule, Module } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { SuppliersController } from './suppliers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Supplier, SupplierSchema } from './schema/supplier.schema';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Supplier.name, schema: SupplierSchema}]),
    CacheModule.register({ // redis configuration (for communication between our app and redis)
      store: redisStore, // redisStore represent the cache-manager-redis-store library.
      host: 'redis', 
    })
],
  controllers: [SuppliersController],
  providers: [SuppliersService]
})
export class SuppliersModule {}
