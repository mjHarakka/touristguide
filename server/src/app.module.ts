import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LayersModule } from './layers/layers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.duudm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
    LayersModule,
  ],
})
export class AppModule {}
