import { IOrder } from '../interface/order.interface';
export declare class CreateOrderDto implements Omit<IOrder, "id"> {
    number: number;
    client_name: string;
    total_price: number;
}
