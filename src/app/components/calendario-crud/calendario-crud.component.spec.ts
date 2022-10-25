import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioCrudComponent } from './calendario-crud.component';

describe('CalendarioCrudComponent', () => {
  let component: CalendarioCrudComponent;
  let fixture: ComponentFixture<CalendarioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
