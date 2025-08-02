import { Injectable } from '@nestjs/common';
import { InventoryStatusService } from 'src/modules/inventory/services/status.service';
import { PaymentStatusService } from 'src/modules/payment/services/status.service';

@Injectable()
export class StatusService {
  constructor(
    private readonly paymentStatusService: PaymentStatusService,
    private readonly inventoryStatusService: InventoryStatusService,
  ) {}

  getPaymentStatus() {
    return this.paymentStatusService.getStatus();
  }

  getInventoryStatus() {
    return this.inventoryStatusService.getStatus();
  }

  getAllStatuses() {
    return {
      payment: this.getPaymentStatus(),
      inventory: this.getInventoryStatus(),
    };
  }
}
