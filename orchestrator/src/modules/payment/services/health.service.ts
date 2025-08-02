import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentHealthService {
  getHealth() {
    return { status: 'ok', service: 'payment' };
  }
}
