import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSafeComponent } from './img-safe.component';

describe('ImgSafeComponent', () => {
  let component: ImgSafeComponent;
  let fixture: ComponentFixture<ImgSafeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSafeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
