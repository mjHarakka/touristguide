import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Layer } from '../../layers/schemas/layer.schema';

export type PlaceDocument = Place & mongoose.Document;

@Schema()
export class Place {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Layer' })
  layer: Layer;
}
