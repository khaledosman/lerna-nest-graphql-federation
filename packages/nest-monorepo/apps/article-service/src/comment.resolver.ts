import { ArticleService } from './article-service.service';
import { Comment } from './comment.entity';
import { Resolver, Parent, ResolveField } from '@nestjs/graphql';
import { Article } from './article.schema';

@Resolver((of) => Comment)
export class CommentResolver {
  constructor(private articleService: ArticleService) {}

  @ResolveField(() => [Article])
  articles(@Parent() comment: Comment) {
    return this.articleService.getArticlesForComment(comment._id);
  }
}
