import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ISupplier } from './interface/supplier.interface';
export declare class SupplierService {
    private readonly client;
    constructor(client: ClientProxy);
    findAll(): Promise<Observable<ISupplier[]>>;
    findOne(id: string): Promise<Observable<ISupplier>>;
}
