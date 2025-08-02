import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): Promise<{ status: string; service: string }> {
    return Promise.resolve({ status: 'ok', service: 'inventory' });
  }
}
