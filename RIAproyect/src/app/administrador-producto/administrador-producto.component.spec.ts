import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorProductoComponent } from './administrador-producto.component';

describe('AdministradorProductoComponent', () => {
  let component: AdministradorProductoComponent;
  let fixture: ComponentFixture<AdministradorProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
