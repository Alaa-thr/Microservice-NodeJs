import { IsAlpha, IsNotEmpty, IsNumber } from 'class-validator';
import { IOrder } from "../interface/order.interface";

export class CreateOrderDto implements Omit<IOrder, "id"> {
  
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @IsAlpha()
    @IsNotEmpty()
    client_name: string;

    @IsNumber()
    @IsNotEmpty()
    total_price: number;
}