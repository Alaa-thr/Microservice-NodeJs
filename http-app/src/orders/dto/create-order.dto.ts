/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, IsNumber } from 'class-validator';
import { IOrder } from '../interface/order.interface';

export class CreateOrderDto implements Omit<IOrder, "id"> {
  
    @ApiProperty({description: 'the number needs to be number and not empty'})
    @IsNumber()
    @IsNotEmpty()
    number: number;

    @ApiProperty({description: 'the client name needs to be string and not empty'})
    @IsAlpha()
    @IsNotEmpty()
    client_name: string;

    @ApiProperty({description: 'the totale proce needs to be number and not empty'})
    @IsNumber()
    @IsNotEmpty()
    total_price: number;
}
