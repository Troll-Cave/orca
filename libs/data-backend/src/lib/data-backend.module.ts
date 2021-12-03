import { Module } from '@nestjs/common';
import { DataBackendService } from './data-backend.service';

@Module({
  controllers: [],
  providers: [DataBackendService],
  exports: [DataBackendService],
})
export class DataBackendModule {}
