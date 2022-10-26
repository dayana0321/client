import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbposicionesCrudComponent } from './tbposiciones-crud.component';

describe('TbposicionesCrudComponent', () => {
  let component: TbposicionesCrudComponent;
  let fixture: ComponentFixture<TbposicionesCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbposicionesCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbposicionesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
