import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtLogoutComponent } from './tht-logout.component';

describe('ThtLogoutComponent', () => {
  let component: ThtLogoutComponent;
  let fixture: ComponentFixture<ThtLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
