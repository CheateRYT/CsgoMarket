import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
  getStatus() {
    return { status: 'ok', service: 'inventory' };
  }
}
