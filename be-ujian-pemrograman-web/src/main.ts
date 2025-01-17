import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = [
    'http://localhost:3000',
    'https://fe-ujian-pemrograman-web.vercel.app',
  ];

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors.map((err) => {
          const constraints = Object.values(err.constraints || {}).join(', ');
          return `${err.property} - ${constraints}`;
        });
        return new HttpException(
          { message: messages, error: 'Bad Request', statusCode: 400 },
          HttpStatus.BAD_REQUEST,
        );
      },
    }),
  );

  app.enableCors({
    origin: whitelist,
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(3001);
}

bootstrap();
