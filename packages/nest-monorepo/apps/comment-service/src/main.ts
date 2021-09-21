import { NestFactory } from '@nestjs/core';
import { CommentServiceModule } from './comment-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CommentServiceModule);
  await app.listen(3000);
}
bootstrap();
