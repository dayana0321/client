import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCrudComponent } from './resultados-crud.component';

describe('ResultadosCrudComponent', () => {
  let component: ResultadosCrudComponent;
  let fixture: ComponentFixture<ResultadosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
