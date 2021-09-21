import { CommentService } from './comment-service.service';
import { Article } from './Article.entity';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';

@Resolver((of) => Article)
export class ArticleResolver {
  constructor(private commentService: CommentService) {}
  @ResolveField(() => [Comment])
  comments(@Parent() article: Article) {
    return this.commentService.getCommentsForArticle(article._id);
  }
}
