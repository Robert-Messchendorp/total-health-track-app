import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtListComponent } from './tht-list.component';

describe('ThtListComponent', () => {
  let component: ThtListComponent;
  let fixture: ComponentFixture<ThtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
