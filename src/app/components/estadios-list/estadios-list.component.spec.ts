import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadiosListComponent } from './estadios-list.component';

describe('EstadiosListComponent', () => {
  let component: EstadiosListComponent;
  let fixture: ComponentFixture<EstadiosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadiosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadiosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
