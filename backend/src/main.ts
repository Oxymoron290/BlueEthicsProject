import { NestFactory } from '@nestjs/core';
import { Logger, LogLevel } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  // Define log levels as LogLevel[]
  const logLevels: LogLevel[] =
    process.env.NODE_ENV === 'production'
      ? ['error', 'warn', 'log'] // Only log errors and warnings in production
      : ['log', 'error', 'warn', 'debug', 'verbose']; // Log everything in development

  const app = await NestFactory.create(AppModule, {
    logger: logLevels,
  });

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.enableCors();

  const port = process.env.PORT || 3000;
  Logger.log(`Listening on port ${port}`);
  await app.listen(port);
}

bootstrap();
