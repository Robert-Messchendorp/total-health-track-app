import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThtRecipesComponent } from './tht-recipes.component';

describe('ThtRecipesComponent', () => {
  let component: ThtRecipesComponent;
  let fixture: ComponentFixture<ThtRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThtRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThtRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
