import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import * as path from 'path';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: [
        `${path.join(__dirname, '..')}/env/.${process.env.NODE_ENV}.env`,
      ],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
