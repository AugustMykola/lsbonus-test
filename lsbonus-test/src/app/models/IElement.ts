export interface IElement {
  name: string;
  text: string;
  type: ElementType;
}

//string in case if input type will be different from text or number
export type ElementType = 'text' | 'number' | string;
