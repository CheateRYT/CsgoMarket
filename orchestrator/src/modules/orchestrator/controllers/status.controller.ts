import { Controller, Get } from '@nestjs/common';
import { OrchestratorService } from '../orchestrator.service';

@Controller('status')
export class StatusController {
  constructor(private readonly orchestratorService: OrchestratorService) {}

  @Get()
  getAllStatuses() {
    return this.orchestratorService.getAllStatuses();
  }

  @Get('orchestrator')
  getOrchestratorStatus() {
    return this.orchestratorService.getStatus();
  }

  @Get('payment')
  getPaymentStatus() {
    return this.orchestratorService.getPaymentStatus();
  }

  @Get('inventory')
  getInventoryStatus() {
    return this.orchestratorService.getInventoryStatus();
  }
}
