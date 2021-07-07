import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("admin")
  getHello(): {} {
    return {name: "ONE PIECE"};
    // return this.appService.getHello();
  }
}
