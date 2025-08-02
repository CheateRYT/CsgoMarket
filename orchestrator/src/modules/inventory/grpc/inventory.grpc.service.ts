import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class InventoryGrpcService implements OnModuleInit {
  private inventoryGrpcService;

  constructor(
    @Inject('INVENTORY_PACKAGE') private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.inventoryGrpcService = this.client.getService('InventoryService');
  }

  getHealth(): Observable<{ status: string; service: string }> {
    return this.inventoryGrpcService.GetHealth({});
  }
}
