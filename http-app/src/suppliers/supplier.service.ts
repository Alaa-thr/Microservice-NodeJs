import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ISupplier } from './interface/supplier.interface';

@Injectable()
export class SupplierService {

  constructor(@Inject('BIGNOVA_SERVICE') private readonly client: ClientProxy){} //injection  of redis server

  async findAll(): Promise<Observable<ISupplier[]>> {
    return await this.client.send('findAllSuppliers',{});
  }
  async findOne(id: string): Promise<Observable<ISupplier>> {
    return await this.client.send('findOneSupplier',id);
  }
}
