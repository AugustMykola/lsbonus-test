export interface IElement {
  name: string;
  text: string;
  type: ElementType;
}

export type ElementType = 'text' | 'number' | string;
