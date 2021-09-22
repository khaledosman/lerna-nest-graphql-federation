import { CommentDocument, Comment } from './comment.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  findOneById(id: string) {
    return this.commentModel.findById(id).lean();
  }

  find(filter: any = {}) {
    return this.commentModel.find(filter).lean();
  }

  getCommentsForArticle(articleId: string) {
    return this.commentModel.find({ articleId: articleId });
  }
  create(payload: CreateCommentDto) {
    return this.commentModel.create(payload);
  }
}
