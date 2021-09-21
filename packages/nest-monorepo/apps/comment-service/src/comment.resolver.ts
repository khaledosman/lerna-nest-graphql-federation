import { CommentService } from './comment-service.service';
import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ID,
} from '@nestjs/graphql';
import { Comment, CommentDocument } from './comment.schema';
import { Article } from './Article.schema';

@Resolver((of) => Comment)
export class CommentsResolver {
  constructor(private commentsService: CommentService) {}

  @Query((returns) => Comment)
  async comment(@Args('id', { type: () => ID }) id: string) {
    return this.commentsService.findOneById(id);
  }

  @Query((returns) => [Comment])
  async comments() {
    return this.commentsService.find();
  }

  @ResolveField((returns) => [Article])
  async articles(@Parent() comment: CommentDocument) {
    const { _id } = comment;
    return {
      _id,
      _typename: 'Article',
    };
  }
}
