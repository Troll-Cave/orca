import { Test } from '@nestjs/testing';
import { AppCatalogBackendController } from './app-catalog-backend.controller';
import { AppCatalogBackendService } from './app-catalog-backend.service';

describe('AppCatalogBackendController', () => {
  let controller: AppCatalogBackendController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [AppCatalogBackendService],
      controllers: [AppCatalogBackendController],
    }).compile();

    controller = module.get(AppCatalogBackendController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
