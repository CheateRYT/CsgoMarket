import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentStatusService {
  getStatus() {
    return { status: 'ok', service: 'payment' };
  }
}
