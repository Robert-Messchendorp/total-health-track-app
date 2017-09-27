import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtDetailComponent } from './tht-detail.component';

describe('ThtDetailComponent', () => {
  let component: ThtDetailComponent;
  let fixture: ComponentFixture<ThtDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
