import { ArticleResolver } from './external/article.resolver';
import { Article } from './external/article.entity';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { CommentSchema, Comment } from './comment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CommentService } from './comment-service.service';
import { CommentsResolver } from './comment.resolver';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      // auth: {
      // username: 'root',
      // password: 'example',
      // },
      dbName: 'comments',
    }),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      // mockEntireSchema: true,
      buildSchemaOptions: {
        orphanedTypes: [Article],
      },
    }),
  ],
  controllers: [],
  providers: [CommentService, CommentsResolver, ArticleResolver],
})
export class CommentServiceModule {}
