import { CreateOrderDto } from './dto/create-order.dto';
import { IOrder } from './interface/order.interface';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class OrderService {
    private readonly client;
    constructor(client: ClientProxy);
    create(createOrderDto: CreateOrderDto): Promise<Observable<IOrder>>;
    findAll(): Promise<Observable<IOrder[]>>;
    findOne(id: string): Promise<Observable<IOrder>>;
}
