import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  title: string;

  @Prop()
  subtitle: string;

  @Prop()
  content: string;

  @Prop({ type: Types.ObjectId })
  authorId: string;

  @Prop({ type: Types.ObjectId })
  commentIds: string[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
