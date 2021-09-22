import { Article } from '../article.schema';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "_id")')
@Directive('@extends')
export class Comment {
  @Field((type) => ID)
  @Directive('@external')
  _id: string;

  @Field((type) => [Article])
  article: Article[];
}
