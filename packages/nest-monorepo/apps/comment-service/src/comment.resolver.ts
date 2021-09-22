import { CommentService } from './comment-service.service';
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
import { Comment, CommentDocument } from './comment.schema';
import { Article } from './external/article.entity';
import { CreateCommentDto } from './dto/create-comment.dto';

@Resolver((of) => Comment)
export class CommentsResolver {
  constructor(private commentsService: CommentService) {}

  @Query((returns) => Comment)
  async getComment(@Args('id', { type: () => ID }) id: string) {
    return this.commentsService.findOneById(id);
  }

  @Query((returns) => [Comment])
  async getComments() {
    return this.commentsService.find();
  }

  @Mutation((returns) => Comment)
  createComment(
    @Args('payload', { type: () => CreateCommentDto })
    payload: CreateCommentDto,
  ) {
    return this.commentsService.create(payload);
  }

  // @ResolveField((returns) => [Article])
  // async article(@Parent() comment: CommentDocument) {
  //   const { _id } = comment;
  //   return {
  //     id: _id,
  //     _typename: 'Article',
  //   };
  // }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }) {
    return this.commentsService.findOneById(reference.id);
  }
}
