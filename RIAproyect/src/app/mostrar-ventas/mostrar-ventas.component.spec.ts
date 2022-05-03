import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarVentasComponent } from './mostrar-ventas.component';

describe('MostrarVentasComponent', () => {
  let component: MostrarVentasComponent;
  let fixture: ComponentFixture<MostrarVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarVentasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
