import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LayersController } from './layers.controller';
import { LayersService } from './layers.service';
import { Layer, LayerSchema } from './schemas/layer.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Layer.name, schema: LayerSchema }]),
  ],
  controllers: [LayersController],
  providers: [LayersService],
})
export class LayersModule {}
