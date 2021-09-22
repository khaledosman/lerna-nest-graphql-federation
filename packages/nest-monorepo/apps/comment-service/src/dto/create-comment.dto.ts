import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCommentDto {
  // @Field(() => ID)
  // authorId: string;

  @Field(() => ID)
  articleId: string;

  @Field(() => String)
  commentContent: string;

  @Field((type) => [ID], {
    nullable: true,
    defaultValue: [],
  })
  commentIds: string;
}
