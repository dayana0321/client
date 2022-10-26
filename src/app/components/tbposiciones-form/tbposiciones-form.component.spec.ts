import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbposicionesFormComponent } from './tbposiciones-form.component';

describe('TbposicionesFormComponent', () => {
  let component: TbposicionesFormComponent;
  let fixture: ComponentFixture<TbposicionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbposicionesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbposicionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
