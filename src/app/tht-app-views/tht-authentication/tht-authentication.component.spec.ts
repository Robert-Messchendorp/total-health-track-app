import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtAuthenticationComponent } from './tht-authentication.component';

describe('ThtAuthenticationComponent', () => {
  let component: ThtAuthenticationComponent;
  let fixture: ComponentFixture<ThtAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtAuthenticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
