import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticleServiceController } from './article-service.controller';
import { ArticleServiceService } from './article-service.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/articles')],
  controllers: [ArticleServiceController],
  providers: [ArticleServiceService],
})
export class ArticleServiceModule {}
