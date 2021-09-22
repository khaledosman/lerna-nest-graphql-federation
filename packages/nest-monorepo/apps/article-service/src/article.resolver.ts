import { Comment } from './external/comment.entity';
import { ArticleService } from './article-service.service';
import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ID,
  ResolveReference,
  Mutation,
} from '@nestjs/graphql';
import { Article, ArticleDocument } from './article.schema';
import { LeanDocument, Query as MongoQuery } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
@Resolver((of) => Article)
export class ArticleResolver {
  constructor(private articlesService: ArticleService) {}

  @Query((returns) => Article)
  async article(@Args('id', { type: () => ID }) id: string) {
    return this.articlesService.getArticle(id);
  }

  @Query((returns) => [Article])
  async getArticles() {
    return this.articlesService.getArticles();
  }

  @Mutation((returns) => Article)
  createArticle(
    @Args('payload', { type: () => CreateArticleDto })
    payload: CreateArticleDto,
  ) {
    return this.articlesService.createArticle(payload);
  }

  // @ResolveField((of) => [Comment])
  // comments(@Parent() article: Article) {
  //   return { __typename: 'Comment', id: article._id };
  // }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): MongoQuery<LeanDocument<ArticleDocument>, ArticleDocument> {
    return this.articlesService.getArticle(reference.id);
  }
}
