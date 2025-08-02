import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryHealthService {
  getHealth() {
    return { status: 'ok', service: 'inventory' };
  }
}
