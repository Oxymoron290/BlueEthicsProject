import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RequestContextService } from './request-context.service';
import { CorrelationIdLogger } from './correlation-id.logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { RecordModule } from './record/record.module';
import { PersonnelModule } from './personnel/personnel.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    OrganizationModule,
    RecordModule,
    PersonnelModule,
  ],
  controllers: [AppController],
  providers: [AppService, RequestContextService, CorrelationIdLogger],
})
export class AppModule {}
