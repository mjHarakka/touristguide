import { Body, Controller, Get, Post } from '@nestjs/common';
import { LayersService } from './layers.service';
import { CreateLayerDto } from './dto/create-layer.dto';
import { Layer } from './schemas/layer.schema';

@Controller('layers')
export class LayersController {
  constructor(private readonly layersService: LayersService) {}

  @Post()
  async create(@Body() createLayerDto: CreateLayerDto) {
    await this.layersService.create(createLayerDto);
  }

  @Get()
  async findAll(): Promise<Layer[]> {
    return this.layersService.findAll();
  }
}
