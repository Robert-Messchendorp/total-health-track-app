import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtInputCardComponent } from './tht-input-card.component';

describe('ThtInputCardComponent', () => {
  let component: ThtInputCardComponent;
  let fixture: ComponentFixture<ThtInputCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtInputCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtInputCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
