import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiosCrudComponent } from './estadios-crud.component';

describe('EstadiosCrudComponent', () => {
  let component: EstadiosCrudComponent;
  let fixture: ComponentFixture<EstadiosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadiosCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadiosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
