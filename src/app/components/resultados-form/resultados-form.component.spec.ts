import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosFormComponent } from './resultados-form.component';

describe('ResultadosFormComponent', () => {
  let component: ResultadosFormComponent;
  let fixture: ComponentFixture<ResultadosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
