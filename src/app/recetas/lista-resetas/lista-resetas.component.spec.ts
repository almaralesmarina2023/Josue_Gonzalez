import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResetasComponent } from './lista-resetas.component';

describe('ListaResetasComponent', () => {
  let component: ListaResetasComponent;
  let fixture: ComponentFixture<ListaResetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaResetasComponent]
    });
    fixture = TestBed.createComponent(ListaResetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
