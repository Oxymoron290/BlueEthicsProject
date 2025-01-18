import { Controller, Get } from '@nestjs/common';
import { VERSION } from './version';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  index() {
    return {
      name: 'blue-ethics api',
      status: 'ok',
      version: VERSION,
    };
  }
}
