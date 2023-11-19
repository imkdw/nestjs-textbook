import { Inject, Injectable } from '@nestjs/common';
import emailConfig from '../config/emailConfig';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class EmailService {
  constructor(
    @Inject(emailConfig.KEY) private config: ConfigType<typeof emailConfig>,
  ) {}

  sendMemberJoinVerification(email: string, signupVerifyToken: string) {
    return { email, signupVerifyToken, data: this.config.service };
  }
}
