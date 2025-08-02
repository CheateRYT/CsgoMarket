import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { HealthResponse } from 'src/grpc/generated/inventory';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class InventoryGrpcService implements OnModuleInit {
  private inventoryGrpcService;

  constructor(
    @Inject('INVENTORY_PACKAGE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.inventoryGrpcService = this.client.getService('InventoryService');
  }

  async getHealth(): Promise<HealthResponse> {
    const observable = this.inventoryGrpcService.GetHealth({});
    return lastValueFrom(observable);
  }
}
