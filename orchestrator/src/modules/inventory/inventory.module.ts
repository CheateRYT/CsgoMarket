import { Module } from '@nestjs/common';
import { InventoryStatusService } from './services/status.service';

@Module({
  providers: [InventoryStatusService],
  exports: [InventoryStatusService],
})
export class InventoryModule {}
