import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notification-email')
  async sendEmail(@Payload() data: any): Promise<void> {
    try {
      return await this.appService.sendEmail(data.value.email);
    } catch (error) {
      return error;
    }
  }

  @MessagePattern('notification-phone')
  sendPhone(@Payload() data: any): void {
    console.log(data.value);
  }
}
