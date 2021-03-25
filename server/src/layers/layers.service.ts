import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Layer, LayerDocument } from './schemas/layer.schema';
import { CreateLayerDto } from './dto/create-layer.dto';

@Injectable()
export class LayersService {
  constructor(@InjectModel(Layer.name) private layerModel: Model<LayerDocument>) {}

  async create(createLayerDto: CreateLayerDto): Promise<Layer> {
    const createdLayer = new this.layerModel(createLayerDto);
    return createdLayer.save();
  }

  async findAll(): Promise<Layer[]> {
    return this.layerModel.find().exec();
  }
}
