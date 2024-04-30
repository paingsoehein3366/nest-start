import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
      @Get()
      listMessages() {
            return 'hi controller!'
      }
      @Post()
      createMessage(@Body() body: CreateMessageDto) {
            console.log(body);
      }
      @Get(':id')
      getMessage(@Param('id') id: Number) {
            console.log(id);
      }
}