import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantModule } from './plant/plant.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Plant } from './plant/plant.entity';

@Module({
  imports: [
    PlantModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      name: "plantConnection",
      database: 'plantDB',
      entities: [Plant],
      // turn off sync in prod
      synchronize: false, 
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      name: 'userConnection',
      database: 'plantDB',
      entities: [User],
      synchronize: false, 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
