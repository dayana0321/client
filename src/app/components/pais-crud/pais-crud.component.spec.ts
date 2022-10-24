import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisCrudComponent } from './pais-crud.component';

describe('PaisCrudComponent', () => {
  let component: PaisCrudComponent;
  let fixture: ComponentFixture<PaisCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
