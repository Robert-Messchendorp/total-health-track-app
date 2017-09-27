import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtDataTableComponent } from './tht-data-table.component';

describe('ThtDataTableComponent', () => {
  let component: ThtDataTableComponent;
  let fixture: ComponentFixture<ThtDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
