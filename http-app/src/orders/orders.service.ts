import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { IOrder } from './interface/order.interface';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';


@Injectable()
export class OrderService {
  constructor(@Inject('BIGNOVA_SERVICE') private readonly client: ClientProxy){} //injection  of redis server
  
  async create(createOrderDto: CreateOrderDto): Promise<Observable<IOrder>> {
    return await this.client.send('createOrder', createOrderDto);
  }
  async findAll(): Promise<Observable<IOrder[]>> {
    return await this.client.send('findAllOrders',{});
  }
  async findOne(id: string): Promise<Observable<IOrder>> {
    return await this.client.send('findOneOrder',id);
  }
}
