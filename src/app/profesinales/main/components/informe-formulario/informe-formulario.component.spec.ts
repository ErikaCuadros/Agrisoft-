import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeFormularioComponent } from './informe-formulario.component';

describe('InformeFormularioComponent', () => {
  let component: InformeFormularioComponent;
  let fixture: ComponentFixture<InformeFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformeFormularioComponent]
    });
    fixture = TestBed.createComponent(InformeFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
