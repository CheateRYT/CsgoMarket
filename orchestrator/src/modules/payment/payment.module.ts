import { Module } from '@nestjs/common';
import { PaymentStatusService } from './services/status.service';

@Module({
  providers: [PaymentStatusService],
  exports: [PaymentStatusService],
})
export class PaymentModule {}
