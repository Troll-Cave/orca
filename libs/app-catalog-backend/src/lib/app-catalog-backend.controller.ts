import {Controller, Get} from '@nestjs/common';
import { AppCatalogBackendService } from './app-catalog-backend.service';

@Controller('catalog')
export class AppCatalogBackendController {
  constructor(private appCatalogBackendService: AppCatalogBackendService) {}

  @Get()
  async getExample() {
    await this.appCatalogBackendService.testDatabase();
    return {
      message: "hi"
    };
  }
}
