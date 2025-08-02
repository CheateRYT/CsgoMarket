import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentService {
  getStatus() {
    return { status: 'ok', service: 'payment' };
  }
}
