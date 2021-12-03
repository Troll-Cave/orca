import { Injectable } from '@nestjs/common';

import { Sequelize } from 'sequelize';

export const DataBackendSequelize = new Sequelize('postgres://postgres:garden@localhost:5432/orca');

@Injectable()
export class DataBackendService {}
