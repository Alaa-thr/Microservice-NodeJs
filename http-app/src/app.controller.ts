import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { CreateOrderDto } from './orders/dto/create-order.dto';
import { IOrder } from './orders/interface/order.interface';
import { OrderService } from './orders/orders.service';
import { ISupplier } from './suppliers/interface/supplier.interface';
import { SupplierService } from './suppliers/supplier.service';

@ApiTags('bigNovaApi')
@Controller()
export class AppController {
  constructor(
    private readonly orderService: OrderService,
    private readonly supplierService: SupplierService,
  ) {}

  @Post('orders')
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Observable<IOrder>>  {
    return await this.orderService.create(createOrderDto);
  }
  @Get('orders')
  async findAllOrders(): Promise<Observable<IOrder[]>>{
    return await this.orderService.findAll();
  }
  @Get('orders/:id')
  async findOneOrder(@Param('id') id: string): Promise<Observable<IOrder>> {
    return await this.orderService.findOne(id);
  }
  @Get('suppliers')
  async findAllSuppliers(): Promise<Observable<ISupplier[]>> {
    return await this.supplierService.findAll();
  }
  @Get('suppliers/:id')
  async findOneSupplier(@Param('id') id: string): Promise<Observable<ISupplier>> {
    return await this.supplierService.findOne(id);
  }
}
