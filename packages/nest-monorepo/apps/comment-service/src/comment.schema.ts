import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema({
  timestamps: true,
})
export class Comment {
  @Prop({ type: Types.ObjectId })
  authorId: string;

  @Prop({ type: Types.ObjectId })
  articleId: string;

  @Prop()
  commentContent: string;

  @Prop({
    ref: Comment.name,
    type: Types.ObjectId,
  })
  commentIds: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
