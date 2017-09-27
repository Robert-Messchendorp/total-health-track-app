import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtStocksAndSharesComponent } from './tht-stocks-and-shares.component';

describe('ThtStocksAndSharesComponent', () => {
  let component: ThtStocksAndSharesComponent;
  let fixture: ComponentFixture<ThtStocksAndSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtStocksAndSharesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtStocksAndSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
