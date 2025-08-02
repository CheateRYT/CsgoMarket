import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthResponse } from './grpc/generated/inventory';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('InventoryService', 'GetHealth')
  GetHealth(): Promise<HealthResponse> {
    return this.appService.getHealth();
  }
}
