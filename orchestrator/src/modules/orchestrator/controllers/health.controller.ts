import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../services/health.service';

@Controller('status')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getAllStatuses() {
    return this.healthService.getAllHealthes();
  }

  @Get('payment')
  getPaymentStatus() {
    return this.healthService.getPaymentHealth();
  }

  @Get('inventory')
  getInventoryStatus() {
    return this.healthService.getInventoryHealth();
  }
}
