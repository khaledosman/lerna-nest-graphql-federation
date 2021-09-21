import { CommentResolver } from './comment.resolver';
import { Comment } from './comment.entity';
import { ArticleResolver } from './article.resolver';
import { Article, ArticleSchema } from './article.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ArticleService } from './article-service.service';
import { GraphQLFederationModule } from '@nestjs/graphql';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/articles'),
    MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }]),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      // mockEntireSchema: true,
      buildSchemaOptions: {
        orphanedTypes: [Comment],
      },
    }),
  ],
  providers: [ArticleService, ArticleResolver, CommentResolver],
})
export class ArticleServiceModule {}
