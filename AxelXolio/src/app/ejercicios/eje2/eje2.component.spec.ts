import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eje2Component } from './eje2.component';

describe('Eje2Component', () => {
  let component: Eje2Component;
  let fixture: ComponentFixture<Eje2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eje2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eje2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
