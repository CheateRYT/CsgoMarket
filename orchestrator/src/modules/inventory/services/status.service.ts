import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryStatusService {
  getStatus() {
    return { status: 'ok', service: 'inventory' };
  }
}
