import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SuppliersService } from './suppliers.service';

@Controller()
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @MessagePattern('findAllSuppliers')
  async findAll() {
    return await this.suppliersService.findAll();
  }

  @MessagePattern('findOneSupplier')
  async findOne(@Payload() id: string) {
    return await this.suppliersService.findOne(id);
  }

}
