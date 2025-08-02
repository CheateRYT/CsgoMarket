import { Injectable, LogLevel } from '@nestjs/common';

@Injectable()
export class ConfigService {
  get(key: string, defaultValue?: string): string | undefined {
    return process.env[key] ?? defaultValue;
  }

  getNumber(key: string, defaultValue?: number): number | undefined {
    const value = process.env[key];
    if (value === undefined) return defaultValue;
    const num = Number(value);
    return isNaN(num) ? defaultValue : num;
  }

  getLogLevels(): LogLevel[] {
    const level = process.env.LOG_LEVEL;
    if (level === 'dev') {
      return ['log', 'debug', 'error', 'warn', 'verbose'];
    }
    if (level === 'prod') {
      return ['error', 'warn'];
    }
    return ['log'];
  }
}
