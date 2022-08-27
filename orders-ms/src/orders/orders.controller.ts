import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern('createOrder')
  async create(@Payload() createOrderDto: CreateOrderDto){
    return await this.ordersService.create(createOrderDto);
  }

  @MessagePattern('findAllOrders')
  async findAll() {
    return await this.ordersService.findAll();
  }

  @MessagePattern('findOneOrder')
  async findOne(@Payload() id: string) {
    return await this.ordersService.findOne(id);
  }

}
