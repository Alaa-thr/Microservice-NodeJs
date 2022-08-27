import { Observable } from 'rxjs';
import { CreateOrderDto } from './orders/dto/create-order.dto';
import { IOrder } from './orders/interface/order.interface';
import { OrderService } from './orders/orders.service';
import { ISupplier } from './suppliers/interface/supplier.interface';
import { SupplierService } from './suppliers/supplier.service';
export declare class AppController {
    private readonly orderService;
    private readonly supplierService;
    constructor(orderService: OrderService, supplierService: SupplierService);
    create(createOrderDto: CreateOrderDto): Promise<Observable<IOrder>>;
    findAllOrders(): Promise<Observable<IOrder[]>>;
    findOneOrder(id: string): Promise<Observable<IOrder>>;
    findAllSuppliers(): Promise<Observable<ISupplier[]>>;
    findOneSupplier(id: string): Promise<Observable<ISupplier>>;
}
