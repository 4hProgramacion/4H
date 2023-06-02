import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eje1Component } from './eje1.component';

describe('Eje1Component', () => {
  let component: Eje1Component;
  let fixture: ComponentFixture<Eje1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eje1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eje1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
