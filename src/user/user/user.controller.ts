import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/v1/user')
export class UserController {
  @Post('/create')
  postUser(): string {
    return 'Ini Post';
  }

  @Get()
  getUsers(): string {
    return 'Ini Get';
  }

  @Get('/:id')
  getUserById(@Req() request: Request): string {
    return `Ini Get dengan ID ${request.params.id}`;
  }
}
