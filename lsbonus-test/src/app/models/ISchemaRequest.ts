import {IElement} from './IElement';

export interface ISchemaRequest {
  result: any;
  schema: ISchema;
}

export interface ISchema {
  text: string;
  name: string;
  color: string;
  elements: IElement[];
}
