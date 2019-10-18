import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchEngineComponent } from './pokemon-search-engine.component';

describe('PokemonSearchEngineComponent', () => {
  let component: PokemonSearchEngineComponent;
  let fixture: ComponentFixture<PokemonSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
