import { Injectable } from '@nestjs/common';
import { PaymentService } from '../payment/payment.service';
import { InventoryService } from '../inventory/inventory.service';

@Injectable()
export class OrchestratorService {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly inventoryService: InventoryService,
  ) {}

  getStatus() {
    return { status: 'ok', service: 'orchestrator' };
  }

  getPaymentStatus() {
    return this.paymentService.getStatus();
  }

  getInventoryStatus() {
    return this.inventoryService.getStatus();
  }

  getAllStatuses() {
    return {
      orchestrator: this.getStatus(),
      payment: this.getPaymentStatus(),
      inventory: this.getInventoryStatus(),
    };
  }
}
