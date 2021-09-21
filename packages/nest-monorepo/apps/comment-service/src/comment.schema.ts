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

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  author: string;

  @Prop({ type: Types.ObjectId })
  // @Field(() => ID)
  article: string;

  @Prop()
  @Field()
  commentContent: string;

  @Field((type) => [ID])
  @Prop({
    ref: Comment.name,
    type: Types.ObjectId,
  })
  comments: string;

  @Field(() => Date)
  createdAt: string;

  @Field(() => Date)
  updatedAt: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
