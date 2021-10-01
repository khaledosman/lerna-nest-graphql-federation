import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { CommentServiceModule } from './comment-service.module';

async function bootstrap() {
  const app = await NestFactory.create(CommentServiceModule);
  const microserviceApp =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      CommentServiceModule,
      {
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    );
  await app.listen(3000);
}
bootstrap();
