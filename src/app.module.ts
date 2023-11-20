import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import emailConfig from './config/emailConfig';
import { validationSchema } from './config/validationSchema';
import { UserEntity } from './users/entity/user.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import TransformInterceptor from './common/interceptor/transform.interceptor';

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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'test',
      entities: [UserEntity],
    }),
  ],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
  controllers: [AppController],
})
export class AppModule {}
