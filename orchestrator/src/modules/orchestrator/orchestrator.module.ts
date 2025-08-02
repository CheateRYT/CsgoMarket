import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';
import { OrchestratorService } from './orchestrator.service';
import { OrchestratorController } from './orchestrator.controller';
import { PaymentModule } from '../payment/payment.module';
import { InventoryModule } from '../inventory/inventory.module';
import { StatusController } from './controllers/status.controller';

@Module({
  imports: [ConfigModule, PaymentModule, InventoryModule],
  controllers: [OrchestratorController, StatusController],
  providers: [OrchestratorService],
  exports: [OrchestratorService],
})
export class OrchestratorModule {}
