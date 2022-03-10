import { Controller, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { article } from './interfaces/article.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): article {
    return this.appService.getHello();
  }
  @Post()
  postHello(@Body() data:article): void {
  
    this.appService.postHello(data)
  }
  @Put(':id')
  putHello(@Param() param, @Body() body): void {
    this.appService.putHello(param.id, body)
  }
  @Delete(':id')
  deleteHello(@Param() param): void {
    this.appService.deleteHello(param.id)
  }
}
