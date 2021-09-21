import { CommentDocument, Comment } from './comment.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

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
    return this.commentModel.find({ article: articleId });
  }
}
