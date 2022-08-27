import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { OrderService } from './orders/orders.service';
import { SupplierService } from './suppliers/supplier.service';

@Module({
  imports: [
    ClientsModule.register([ //register our redis server
    {
      name: 'BIGNOVA_SERVICE', //redis server name to inject it
      transport: Transport.REDIS,
      options: {
        host: 'redis',
      }
    },
    
  ]),],
  controllers: [AppController],
  providers: [SupplierService, OrderService],
})
export class AppModule {}
