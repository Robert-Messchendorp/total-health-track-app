import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtLoginComponent } from './tht-login.component';

describe('ThtLoginComponent', () => {
  let component: ThtLoginComponent;
  let fixture: ComponentFixture<ThtLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
