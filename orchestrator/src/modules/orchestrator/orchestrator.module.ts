import { Module } from '@nestjs/common';
import { ConfigModule } from '../../config/config.module';

import { OrchestratorController } from './orchestrator.controller';
import { PaymentModule } from '../payment/payment.module';
import { InventoryModule } from '../inventory/inventory.module';
import { HealthController } from './controllers/health.controller';
import { HealthService } from './services/health.service';

@Module({
  imports: [ConfigModule, PaymentModule, InventoryModule],
  controllers: [OrchestratorController, HealthController],
  providers: [HealthService],
})
export class OrchestratorModule {}
