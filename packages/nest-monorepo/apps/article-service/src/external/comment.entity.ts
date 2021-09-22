import { Article } from '../article.schema';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "_id")')
export class Comment {
  @Field((type) => ID)
  @Directive('@external')
  _id: string;

  @Field((type) => [Article])
  article: Article[];
}
