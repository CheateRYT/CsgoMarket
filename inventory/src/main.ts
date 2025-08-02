import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'inventory',
        protoPath: join(__dirname, '..', '..', 'proto', 'inventory.proto'),
        url: process.env.GRPC_URL ?? '0.0.0.0:50051',
      },
    },
  );
  const configService = app.get(ConfigService);
  app.useLogger(configService.getLogLevels());
  await app.listen();
  console.log(
    `Inventory gRPC is running on ${process.env.GRPC_URL ?? '0.0.0.0:50051'}`,
  );
}
bootstrap();
