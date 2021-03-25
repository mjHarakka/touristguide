import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LayerDocument = Layer & Document;

@Schema()
export class Layer {
  @Prop()
  title: string;
  @Prop()
  lat: Number;
  @Prop()
  long: Number;
  @Prop()
  description: string;
}

export const LayerSchema = SchemaFactory.createForClass(Layer);
