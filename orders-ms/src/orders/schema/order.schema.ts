import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type OrderDocument = Order & Document;

@Schema()
export class Order{
  @Prop({unique: true, required: true})
  number: number;

  @Prop({required: true})
  client_name: string;

  @Prop({required: true})
  total_price: number;
}
export const OrderSchema = SchemaFactory.createForClass(Order); //create schema of type Order