import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CommentServiceController } from './comment-service.controller';
import { CommentServiceService } from './comment-service.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/comments')],
  controllers: [CommentServiceController],
  providers: [CommentServiceService],
})
export class CommentServiceModule {}
