import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().setTitle('API').setDescription('API Lists').build(),
  );

  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(3001);
}
bootstrap();
