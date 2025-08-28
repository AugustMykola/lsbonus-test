import { IElement } from './IElement';
import { IRequestResult } from './IRequestResult';

export interface ISchemaRequest {
  result: IRequestResult;
  schema: ISchema;
}

export interface ISchema {
  text: string;
  name: string;
  color: string;
  elements: IElement[];
}
