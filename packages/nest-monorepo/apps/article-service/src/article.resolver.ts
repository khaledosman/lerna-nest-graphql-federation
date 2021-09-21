import { Comment } from './comment.entity';
import { ArticleService } from './article-service.service';
import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ID,
  ResolveReference,
} from '@nestjs/graphql';
import { Article, ArticleDocument } from './article.schema';
import { LeanDocument, Query as MongoQuery } from 'mongoose';

@Resolver((of) => Article)
export class ArticleResolver {
  constructor(private articlesService: ArticleService) {}

  @Query((returns) => Article)
  async article(@Args('id', { type: () => ID }) id: string) {
    return this.articlesService.getArticle(id);
  }

  @Query((returns) => [Article])
  async articles() {
    return this.articlesService.getArticles();
  }

  @ResolveField((of) => [Comment])
  comments(@Parent() article: Article) {
    return { __typename: 'Comment', id: article._id };
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): MongoQuery<LeanDocument<ArticleDocument>, ArticleDocument> {
    return this.articlesService.getArticle(reference.id);
  }
}
