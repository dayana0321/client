import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbposicionesListComponent } from './tbposiciones-list.component';

describe('TbposicionesListComponent', () => {
  let component: TbposicionesListComponent;
  let fixture: ComponentFixture<TbposicionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbposicionesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbposicionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
