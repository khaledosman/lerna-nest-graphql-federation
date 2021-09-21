import { ArticleService } from './article-service.service';
import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ID,
} from '@nestjs/graphql';
import { Article, ArticleDocument } from './article.schema';

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

  // @ResolveField((returns) => [Comment])
  // async comments(@Parent() article: ArticleDocument) {
  //   const { _id } = article;
  //   return {
  //     _id,
  //     _typename: 'Article',
  //   };
  // }
}
