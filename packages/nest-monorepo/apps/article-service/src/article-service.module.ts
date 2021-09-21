import { ArticleResolver } from './article.resolver';
import { Article, ArticleSchema } from './article.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticleService } from './article-service.service';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/articles'),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      mockEntireSchema: true,
    }),
  ],
  providers: [ArticleService, ArticleResolver],
})
export class ArticleServiceModule {}
