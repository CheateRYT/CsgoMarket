import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INVENTORY_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'inventory',
          protoPath: join(
            __dirname,
            '..',
            '..',
            '..',
            '..',
            '..',
            'proto',
            'inventory.proto',
          ),
          url: process.env.INVENTORY_GRPC_URL ?? '0.0.0.0:50051',
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class InventoryGrpcClientModule {}
