import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendMail(email: string) {
    await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Hello World',
      html: `
        <div style="background-color: #f2f2f2; padding: 20px;">
          <h1 style="color: #333333; font-size: 24px;">Welcome to Our Platform!</h1>
          <p style="color: #666666; font-size: 16px;">Congrats on sending your <strong>first email</strong>!</p>
          <div style="margin-top: 20px; text-align: center;">
            <a href="#" style="background-color: #337ab7; color: #ffffff; padding: 10px 20px; text-decoration: none;">Get Started</a>
          </div>
        </div>
      `,
    });
  }
}
