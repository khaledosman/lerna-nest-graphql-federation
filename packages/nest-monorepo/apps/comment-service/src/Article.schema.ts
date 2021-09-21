import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from './comment.schema';

@ObjectType()
export class Article {
  @Field((returns) => [Comment])
  comments: Comment[];
}
