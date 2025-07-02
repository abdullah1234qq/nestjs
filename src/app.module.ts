import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabadeModule } from './databade/databade.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
@Module({
  imports: [UserModule, DatabadeModule, DatabaseModule, EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
