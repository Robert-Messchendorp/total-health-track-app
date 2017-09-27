import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtAddRecordDialogueComponent } from './tht-add-record-dialogue.component';

describe('ThtAddRecordDialogueComponent', () => {
  let component: ThtAddRecordDialogueComponent;
  let fixture: ComponentFixture<ThtAddRecordDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtAddRecordDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtAddRecordDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
