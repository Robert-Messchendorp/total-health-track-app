import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtRegisterComponent } from './tht-register.component';

describe('ThtRegisterComponent', () => {
  let component: ThtRegisterComponent;
  let fixture: ComponentFixture<ThtRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
