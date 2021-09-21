import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ArticleDocument = Article & Document;

@ObjectType()
@Directive('@key(fields: "_id")')
@Schema({
  timestamps: true,
})
export class Article {
  @Field((type) => ID)
  _id: string;

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
  // @Field((type) => [ID])
  comments: string[];

  @Field(() => Date)
  createdAt: string;

  @Field(() => Date)
  updatedAt: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
