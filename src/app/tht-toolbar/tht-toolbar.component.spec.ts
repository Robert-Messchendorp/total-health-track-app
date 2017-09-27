import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtToolbarComponent } from './tht-toolbar.component';

describe('ThtToolbarComponent', () => {
  let component: ThtToolbarComponent;
  let fixture: ComponentFixture<ThtToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
