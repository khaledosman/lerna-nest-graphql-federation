import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

@ObjectType()
@Schema({
  timestamps: true,
})
export class Comment {
  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  author: string;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
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
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
