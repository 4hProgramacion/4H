import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eje3Component } from './eje3.component';

describe('Eje3Component', () => {
  let component: Eje3Component;
  let fixture: ComponentFixture<Eje3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eje3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eje3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
