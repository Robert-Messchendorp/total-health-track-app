import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtControlsComponent } from './tht-controls.component';

describe('ThtControlsComponent', () => {
  let component: ThtControlsComponent;
  let fixture: ComponentFixture<ThtControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
