import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const envFilePath = `${path.join(__dirname, '..')}/env/.${
      process.env.NODE_ENV
    }.env`;
    return this.appService.getHello();
  }
}
