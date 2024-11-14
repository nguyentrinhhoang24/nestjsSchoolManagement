import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchModule } from './branch/branch.module';
import { SchoolModule } from './school/school.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ClassGroupModule } from './classgroup/classgroup.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Giúp ConfigModule khả dụng trên toàn bộ ứng dụng mà không cần import lại
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/quanlymaugiao'),
    BranchModule,
    SchoolModule,
    ClassGroupModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}