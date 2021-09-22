import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArticleDto {
  @Field()
  title: string;

  @Field()
  subtitle: string;

  @Field()
  content: string;

  // @Field(() => ID, { nullable: true })
  // authorId: string;

  @Field((type) => [ID], { nullable: true, defaultValue: [] })
  commentIds: string[];
}
