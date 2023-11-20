import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';
import { EmailService } from '../email/email.service';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    private readonly emailService: EmailService,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(name: string, email: string, password: string) {
    await this.checkUserExists(email);

    const signupVerifyToken = uuid.v4();

    await this.saveUser(name, email, password, signupVerifyToken);

    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  async verifyEmail(signupVerifyToken: string) {
    // TODO
    // 1.

    throw new Error('asd');
  }

  async login(email: string, password: string) {}

  async getUserInfo(userId: string) {}

  private async checkUserExists(email: string) {}

  private async saveUser(
    name: string,
    email: string,
    password: string,
    signupVerifyToken: string,
  ) {
    const user = new UserEntity();
    user.id = uuid.v4();
    user.name = name;
    user.email = email;
    user.password = password;
    user.signupVerifyToken = signupVerifyToken;
    await this.usersRepository.save(user);
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }
}
