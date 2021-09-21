import { Field, ObjectType, ID, Directive } from '@nestjs/graphql';
import { Comment } from './comment.schema';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "_id")')
export class Article {
  @Directive('@external')
  @Field(() => ID)
  _id: string;

  @Field((returns) => [Comment])
  comments: Comment[];
}
