import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtNotificationSnackbarComponent } from './tht-notification-snackbar.component';

describe('ThtNotificationSnackbarComponent', () => {
  let component: ThtNotificationSnackbarComponent;
  let fixture: ComponentFixture<ThtNotificationSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtNotificationSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtNotificationSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
