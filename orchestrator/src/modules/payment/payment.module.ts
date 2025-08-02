import { Module } from '@nestjs/common';
import { PaymentHealthService } from './services/health.service';

@Module({
  providers: [PaymentHealthService],
  exports: [PaymentHealthService],
})
export class PaymentModule {}
