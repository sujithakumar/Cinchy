import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitPageComponent } from './exit-page.component';

describe('ExitPageComponent', () => {
  let component: ExitPageComponent;
  let fixture: ComponentFixture<ExitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
