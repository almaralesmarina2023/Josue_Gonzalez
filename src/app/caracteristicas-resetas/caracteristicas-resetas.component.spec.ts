import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicasResetasComponent } from './caracteristicas-resetas.component';

describe('CaracteristicasResetasComponent', () => {
  let component: CaracteristicasResetasComponent;
  let fixture: ComponentFixture<CaracteristicasResetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteristicasResetasComponent]
    });
    fixture = TestBed.createComponent(CaracteristicasResetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
