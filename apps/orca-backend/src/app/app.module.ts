import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AppCatalogBackendModule, AppCatalogBackendModuleConfig} from "@troll-cave/app-catalog-backend";
import {DataBackendModule} from "@troll-cave/data-backend";

const appCatalogConfig: AppCatalogBackendModuleConfig = {
}

@Module({
  imports: [DataBackendModule, AppCatalogBackendModule.register(appCatalogConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
