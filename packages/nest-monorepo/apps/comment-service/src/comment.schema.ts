import { Article } from './external/article.entity';
import { Field, ObjectType, ID, Directive } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

@ObjectType()
@Directive('@key(fields: "_id")')
@Schema({
  timestamps: true,
})
export class Comment {
  @Field((type) => ID)
  _id: string;

  // @Prop({ type: Types.ObjectId })
  // @Field(() => ID)
  // authorId: string;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  articleId: string;

  @Prop()
  @Field(() => String)
  commentContent: string;

  @Field((type) => [ID])
  @Prop({
    ref: Comment.name,
    type: Types.ObjectId,
  })
  commentIds: string;

  @Field((type) => [Comment], {
    nullable: true,
    defaultValue: [],
  })
  comments: Comment[];

  // @Field((type) => Article)
  // article: Article;

  @Field(() => Date)
  createdAt: string;

  @Field(() => Date)
  updatedAt: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
