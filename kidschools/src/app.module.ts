import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BranchModule } from './branch/branch.module';
import { SchoolModule } from './school/school.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ClassGroupModule } from './classgroup/classgroup.module';
import { ClassModule } from './class/class.module';
import { SessionModule } from './session/session.module';
import { MenuModule } from './menu/menu.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { HealthExamModule } from './healthexam/healthexam.module';
import { NewsModule } from './news/news.module';
import { AlbumModule } from './album/album.module';
import { FeeItemModule } from './feeitem/feeitem.module';
import { InvoiceController } from './invoice/invoice.controller';
import { InvoiceService } from './invoice/invoice.service';
import { InvoiceModule } from './invoice/invoice.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Giúp ConfigModule khả dụng trên toàn bộ ứng dụng mà không cần import lại
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/quanlymaugiao'),
    BranchModule,
    SchoolModule,
    ClassGroupModule,
    ClassModule,
    SessionModule,
    MenuModule,
    SubjectModule,
    StudentModule,
    HealthExamModule,
    AuthModule,
    NewsModule,
    AlbumModule,
    FeeItemModule,
    InvoiceModule,
  ],
  controllers: [AppController, InvoiceController],
  providers: [AppService, InvoiceService],
})
export class AppModule {}