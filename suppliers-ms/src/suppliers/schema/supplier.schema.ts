import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SupplierDocument = Supplier & Document;

@Schema()
export class Supplier{
  @Prop({required: true})
  first_name: number;

  @Prop({required: true})
  last_name: string;

  @Prop({required: true, unique: true})
  email: number;

  @Prop()
  age: number;
}
export const SupplierSchema = SchemaFactory.createForClass(Supplier); //create schema of type Supplier