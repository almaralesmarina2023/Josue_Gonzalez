import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetaComponent } from './reseta.component';

describe('ResetaComponent', () => {
  let component: ResetaComponent;
  let fixture: ComponentFixture<ResetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetaComponent]
    });
    fixture = TestBed.createComponent(ResetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
