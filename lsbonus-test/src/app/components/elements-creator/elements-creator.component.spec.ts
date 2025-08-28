import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementsCreatorComponent } from './elements-creator.component';

describe('ElementsCreatorComponent', () => {
  let component: ElementsCreatorComponent;
  let fixture: ComponentFixture<ElementsCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementsCreatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementsCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
