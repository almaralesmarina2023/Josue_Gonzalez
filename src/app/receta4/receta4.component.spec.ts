import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Receta4Component } from './receta4.component';

describe('Receta4Component', () => {
  let component: Receta4Component;
  let fixture: ComponentFixture<Receta4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Receta4Component]
    });
    fixture = TestBed.createComponent(Receta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
