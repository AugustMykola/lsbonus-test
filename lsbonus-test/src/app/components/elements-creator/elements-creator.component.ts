import { Component, EventEmitter, input, InputSignal, Output } from '@angular/core';
import { ReactiveFormsModule, ControlContainer, FormGroupDirective } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { InputText } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabel } from 'primeng/floatlabel';
import { IFieldConfig } from '../../models/IFieldConfig';
import {InputType} from '../../enums/input-type';


@Component({
  selector: 'app-elements-creator',
  standalone: true,
  imports: [ReactiveFormsModule, NgTemplateOutlet, InputText, InputNumberModule, FloatLabel],
  templateUrl: './elements-creator.component.html',
  styleUrl: './elements-creator.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class ElementsCreatorComponent {
  @Output() fieldEvent = new EventEmitter<any>();

  fields: InputSignal<IFieldConfig[]> = input<IFieldConfig[]>([]);

  onFieldEvent(eventName: string, event: any, field: IFieldConfig): void {
    this.fieldEvent.emit({ type: event?.type, eventName, field });
  }

  protected readonly InputType: typeof InputType= InputType;
}

