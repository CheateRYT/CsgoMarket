import { Module } from '@nestjs/common';
import { InventoryHealthService } from './services/health.service';

@Module({
  providers: [InventoryHealthService],
  exports: [InventoryHealthService],
})
export class InventoryModule {}
