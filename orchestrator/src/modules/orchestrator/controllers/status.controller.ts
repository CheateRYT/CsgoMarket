import { Controller, Get } from '@nestjs/common';
import { StatusService } from '../services/status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  getAllStatuses() {
    return this.statusService.getAllStatuses();
  }

  @Get('payment')
  getPaymentStatus() {
    return this.statusService.getPaymentStatus();
  }

  @Get('inventory')
  getInventoryStatus() {
    return this.statusService.getInventoryStatus();
  }
}
