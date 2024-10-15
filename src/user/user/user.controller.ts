import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/api/v1/user')
export class UserController {
  @Post('/create')
  postUser(): string {
    return 'Ini Post';
  }

  @Get()
  getUsers(): string {
    return 'Ini Get Biasa';
  }

  @Get('/welcome')
  sayWelcome(
    @Query('first_name') firstName: string,
    @Query('last_name') lastName: string,
    @Query('nim') nim: number,
  ): string {
    return `Welcome ${firstName + ' ' + lastName || 'Guest'} with Nim ${nim}!`;
  }

  //   @Get('/:id')
  //   getUserById(@Req() request: Request): string {
  //     return `Ini Get dengan ID ${request.params.id}`;
  //   }

  @Get('/:id')
  getUserById(@Param('id') id: string): string {
    return `Ini Get dengan ID ${id}`;
  }
}
