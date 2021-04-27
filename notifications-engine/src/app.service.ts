import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(email: string): Promise<void> {
    await this.mailerService.sendMail({
      to: email, // sender address
      from: process.env.MAILGUN_SMTP_LOGIN, // list of receivers
      subject: 'Usuário Criado no nosso sistema', // Subject line
      text: 'welcome', // plaintext body
      html: '<b>welcome</b>', // HTML body content
    });
  }
}
