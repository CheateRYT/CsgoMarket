import { Injectable } from '@nestjs/common';
import { InventoryGrpcService } from '../grpc/inventory.grpc.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InventoryHealthService {
  constructor(private readonly inventoryGrpcService: InventoryGrpcService) {}
  async getHealth() {
    return await firstValueFrom(this.inventoryGrpcService.getHealth());
  }
}
