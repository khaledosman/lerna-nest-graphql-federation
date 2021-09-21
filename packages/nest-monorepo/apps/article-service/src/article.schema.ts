import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ArticleDocument = Article & Document;

@ObjectType()
@Schema({
  timestamps: true,
})
export class Article {
  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  subtitle: string;

  @Prop()
  @Field()
  content: string;

  @Prop({ type: Types.ObjectId })
  @Field(() => ID)
  author: string;

  @Prop({ type: Types.ObjectId })
  @Field((type) => [ID])
  comments: string[];
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
