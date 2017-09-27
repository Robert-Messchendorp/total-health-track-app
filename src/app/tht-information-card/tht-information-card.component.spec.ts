import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtInformationCardComponent } from './tht-information-card.component';

describe('ThtInformationCardComponent', () => {
  let component: ThtInformationCardComponent;
  let fixture: ComponentFixture<ThtInformationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtInformationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
