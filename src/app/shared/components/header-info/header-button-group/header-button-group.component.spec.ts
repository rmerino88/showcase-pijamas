import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonGroupComponent } from './header-button-group.component';

describe('HeaderButtonGroupComponent', () => {
  let component: HeaderButtonGroupComponent;
  let fixture: ComponentFixture<HeaderButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
