import { Module } from '@nestjs/common';
import { InventoryHealthService } from './services/health.service';
import { InventoryGrpcClientModule } from './grpc/inventory.grpc-client.module';
import { InventoryGrpcService } from './grpc/inventory.grpc.service';

@Module({
  imports: [InventoryGrpcClientModule],
  providers: [InventoryHealthService, InventoryGrpcService],
  exports: [InventoryHealthService],
})
export class InventoryModule {}
