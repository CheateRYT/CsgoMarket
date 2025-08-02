import { Injectable } from '@nestjs/common';
import { InventoryHealthService } from 'src/modules/inventory/services/health.service';
import { PaymentHealthService } from 'src/modules/payment/services/health.service';

@Injectable()
export class HealthService {
  constructor(
    private readonly paymentHealthService: PaymentHealthService,
    private readonly inventoryHealthService: InventoryHealthService,
  ) {}

  getPaymentHealth() {
    return this.paymentHealthService.getHealth();
  }

  getInventoryHealth() {
    return this.inventoryHealthService.getHealth();
  }

  async getAllHealthes() {
    return {
      payment: this.getPaymentHealth(),
      inventory: await this.getInventoryHealth(),
    };
  }
}
