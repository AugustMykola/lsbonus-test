import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FieldViewMapperService } from '../../providers/field-view-mapper/field-view-mapper.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Card } from 'primeng/card';
import { ElementsCreatorComponent } from '../../components/elements-creator/elements-creator.component';

@Component({
  selector: 'app-builder-page',
  imports: [
    ReactiveFormsModule,
    Card,
    ElementsCreatorComponent
  ],
  providers: [FieldViewMapperService],
  templateUrl: './builder-page.component.html',
  styleUrl: './builder-page.component.scss'
})
export class BuilderPageComponent implements OnInit, OnDestroy {
  private fb: FormBuilder = inject(FormBuilder);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private subscription: Subscription = new Subscription();

  public facadeBuilderService: FieldViewMapperService = inject(FieldViewMapperService);
  public form = signal<FormGroup>(this.fb.group({}));

  ngOnInit(): void {
    this.subscription.add(
      this.route.data
        .subscribe(data => {
          this.facadeBuilderService.prepareSchema(data['schema']);
          this.buildForm();
        })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private buildForm() {
    const group: Record<string, FormControl> = {};
    for (const f of this.facadeBuilderService.fields()) {
      if (f.type === 'number') {
        group[f.key] = this.fb.control<number | null>(null, Validators.required);
      } else {
        group[f.key] = this.fb.control<string>('', []);
      }
    }
    this.form.set(this.fb.group(group));
  }

  onFieldEvent(event: any): void {
    console.log('onFieldEvent', event);
  }
}
