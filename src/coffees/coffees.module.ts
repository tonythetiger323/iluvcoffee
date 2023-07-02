import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeesSchema } from './entities/coffee.entity';
import { Event } from 'src/events/entities/event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeesSchema,
      },
      {
        name: Event.name,
        schema: Event,
      },
    ]),
  ],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
