import { Article, ArticleDocument } from './article.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  getArticles() {
    return this.articleModel.find({}).lean();
  }

  getArticle(id: string) {
    return this.articleModel.findById(id).lean();
  }

  getArticlesForComment(commentId: string) {
    return this.articleModel.find({ comments: commentId });
  }

  createArticle(payload: CreateArticleDto) {
    return this.articleModel.create(payload);
  }
}
