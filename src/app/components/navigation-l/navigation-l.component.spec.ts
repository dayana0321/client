import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationLComponent } from './navigation-l.component';

describe('NavigationLComponent', () => {
  let component: NavigationLComponent;
  let fixture: ComponentFixture<NavigationLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
