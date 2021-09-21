import { Article, ArticleDocument } from './article.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
  getArticles() {
    return this.articleModel.find({}).lean();
  }
  getArticle(id: string) {
    return this.articleModel.findById(id).lean();
  }
}
