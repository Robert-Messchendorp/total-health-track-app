import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtPlaygroundComponent } from './tht-playground.component';

describe('ThtPlaygroundComponent', () => {
  let component: ThtPlaygroundComponent;
  let fixture: ComponentFixture<ThtPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
