import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInfoViewComponent } from './header-info-view.component';

describe('HeaderInfoViewComponent', () => {
  let component: HeaderInfoViewComponent;
  let fixture: ComponentFixture<HeaderInfoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderInfoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
