import { Injectable } from '@nestjs/common';
import {DataBackendSequelize} from "@troll-cave/data-backend";
import {DataTypes, Model} from "sequelize";

const sequelize = DataBackendSequelize;

export interface ComponentAttributes {
  id?: string;
  name: string;
  component_type?: string;
  annotations: any;
  data: any;
}

export class ComponentModel extends Model<ComponentAttributes> implements ComponentAttributes
{
  id!: string;
  name!: string;
  component_type!: string;
  annotations!: any;
  data!: any;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
ComponentModel.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  component_type: {
    type: DataTypes.STRING,
    defaultValue: 'unknown'
  },
  annotations: {
    type: DataTypes.JSONB
  },
  data: {
    type: DataTypes.JSONB
  }
}, {
  sequelize,
  tableName: 'component'
})


@Injectable()
export class AppCatalogBackendService {
  async testDatabase() {
    /*await ComponentModel.create({
      name: "Bob",
      annotations: {
        bob: "hi"
      },
      data: {

      }
    });*/
    const data = await ComponentModel.findAll({});
    data[0].name = "";
    console.log(data.map(x => x.toJSON()));
  }


}
