import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleAutComponent } from './exemple-aut.component';

describe('ExempleAutComponent', () => {
  let component: ExempleAutComponent;
  let fixture: ComponentFixture<ExempleAutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleAutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleAutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
