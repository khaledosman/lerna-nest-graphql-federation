import { GraphQLModule } from '@nestjs/graphql';
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
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      mockEntireSchema: true,
    }),
  ],
  controllers: [],
  providers: [CommentService, CommentsResolver],
})
export class CommentServiceModule {}
