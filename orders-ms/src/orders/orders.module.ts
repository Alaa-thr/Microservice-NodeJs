import { CacheModule, Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order, OrderSchema } from './schema/order.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Order.name, schema: OrderSchema}]), // to register the schema with name Order.name
    CacheModule.register({ // redis configuration (for communication between our app and redis)
      store: redisStore, // redisStore represent the cache-manager-redis-store library.
      host: 'redis'
    })
  ], 
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
