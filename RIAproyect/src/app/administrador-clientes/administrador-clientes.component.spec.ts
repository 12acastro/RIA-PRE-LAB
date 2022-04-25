import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorClientesComponent } from './administrador-clientes.component';

describe('AdministradorClientesComponent', () => {
  let component: AdministradorClientesComponent;
  let fixture: ComponentFixture<AdministradorClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
