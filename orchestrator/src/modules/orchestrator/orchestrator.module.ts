import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';

import { OrchestratorController } from './orchestrator.controller';
import { PaymentModule } from '../payment/payment.module';
import { InventoryModule } from '../inventory/inventory.module';
import { StatusController } from './controllers/status.controller';
import { StatusService } from './services/status.service';

@Module({
  imports: [ConfigModule, PaymentModule, InventoryModule],
  controllers: [OrchestratorController, StatusController],
  providers: [StatusService],
})
export class OrchestratorModule {}
