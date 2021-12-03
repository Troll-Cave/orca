import {DynamicModule, Module} from '@nestjs/common';
import { AppCatalogBackendController } from './app-catalog-backend.controller';
import { AppCatalogBackendService } from './app-catalog-backend.service';
import {DataBackendModule} from "@troll-cave/data-backend";

export interface AppCatalogBackendModuleConfig {
  /**
   * The provider where we get data (totally optional)
   */
  dataProvider?: null;

  /**
   * Our defined types that are used by the plugin and the UI
   */
  componentTypes?: null[];
}

@Module({})
export class AppCatalogBackendModule {
  static register(config: AppCatalogBackendModuleConfig): DynamicModule {
    return {
      module: AppCatalogBackendModule,
      controllers: [AppCatalogBackendController],
      providers: [AppCatalogBackendService],
      imports: [DataBackendModule],
      exports: [AppCatalogBackendService],
    }
  }
}
