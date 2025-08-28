import { InputType } from '../enums/input-type';

export interface IFieldConfig {
  //also we can add another params here as min max for input number etc

  name: string;
  key: string;
  text: string;
  type: InputType | string;
}
