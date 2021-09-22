import { CommentResolver } from './external/comment.resolver';
import { Comment } from './external/comment.entity';
import { ArticleResolver } from './article.resolver';
import { Article, ArticleSchema } from './article.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { ArticleService } from './article-service.service';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { cwd } from 'process';
import { join } from 'path';
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
export class ArticleServiceModule implements OnApplicationBootstrap {
  constructor(private articleService: ArticleService) {}
  async onApplicationBootstrap() {
    // const article = await this.articleService.createArticle({
    //   title: 'My first article',
    //   subtitle: 'subtitle',
    //   content: 'GraphQL Federation is cool',
    // });
    // console.log({ article });
  }
}
