import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExempleAutoCompleteGridComponent } from './exemple-auto-complete-grid.component';

describe('ExempleAutoCompleteGridComponent', () => {
  let component: ExempleAutoCompleteGridComponent;
  let fixture: ComponentFixture<ExempleAutoCompleteGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExempleAutoCompleteGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExempleAutoCompleteGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
