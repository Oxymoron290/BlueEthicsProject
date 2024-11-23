import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { VERSION } from './version';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index() {
    return {
      name: 'blue-ethics api',
      status: 'ok',
      version: VERSION,
    };
  }
}
