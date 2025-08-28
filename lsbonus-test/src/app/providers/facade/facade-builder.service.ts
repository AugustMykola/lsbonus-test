import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {ISchema} from '../../models/ISchemaRequest';
import {IElement} from '../../models/IElement';
import {IFieldConfig} from '../../models/IFieldConfig';

@Injectable()
export class FacadeBuilderService {
  schema: WritableSignal<ISchema | null> = signal<ISchema | null>(null);

  fields: Signal<IFieldConfig[]> = computed((): IFieldConfig[] => {
    const elements: IElement[] = this.schema()?.elements ?? [];

    return elements.map((element: IElement): IFieldConfig => {
      const key: string = element.name.toString().trim().replace(/\s/g, '_');
      return { ...element, key } as IFieldConfig;
    })
  });

  color: Signal<string | undefined> = computed(() => this.schema()?.color ? this.schema()?.color : '#000');
  text: Signal<string | undefined> = computed(() => this.schema()?.text ? this.schema()?.text : '');

  prepareSchema(value: ISchema): void {
    this.schema.set(value)
  }
}
