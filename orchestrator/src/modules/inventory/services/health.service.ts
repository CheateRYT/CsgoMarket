import { Injectable } from '@nestjs/common';
import { InventoryGrpcService } from '../grpc/inventory.grpc.service';

@Injectable()
export class InventoryHealthService {
  constructor(private readonly inventoryGrpcService: InventoryGrpcService) {}
  async getHealth() {
    return await this.inventoryGrpcService.getHealth();
  }
}
