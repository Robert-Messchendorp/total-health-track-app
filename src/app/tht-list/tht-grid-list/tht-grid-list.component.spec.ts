import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtGridListComponent } from './tht-grid-list.component';

describe('ThtGridListComponent', () => {
  let component: ThtGridListComponent;
  let fixture: ComponentFixture<ThtGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtGridListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
