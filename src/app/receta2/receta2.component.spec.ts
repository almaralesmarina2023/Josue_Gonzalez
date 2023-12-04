import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta2Component } from './receta2.component';

describe('Receta2Component', () => {
  let component: Receta2Component;
  let fixture: ComponentFixture<Receta2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Receta2Component]
    });
    fixture = TestBed.createComponent(Receta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
