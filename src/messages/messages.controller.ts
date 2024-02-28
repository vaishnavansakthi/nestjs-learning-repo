import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageDto } from './dto/messages.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: MessageDto) {
    console.log(body)
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id)
  }
}
