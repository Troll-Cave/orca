import {Controller, Get} from '@nestjs/common';
import { AppCatalogBackendService } from './app-catalog-backend.service';

@Controller('catalog')
export class AppCatalogBackendController {
  constructor(private appCatalogBackendService: AppCatalogBackendService) {}

  @Get()
  getExample() {
    return {
      message: "hi"
    };
  }
}
