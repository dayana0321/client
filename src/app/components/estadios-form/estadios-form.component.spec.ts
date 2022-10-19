import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiosFormComponent } from './estadios-form.component';

describe('EstadiosFormComponent', () => {
  let component: EstadiosFormComponent;
  let fixture: ComponentFixture<EstadiosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadiosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadiosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
