import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('BigNovaApi')
  .setDescription('The big Nova API description')
  .build();
