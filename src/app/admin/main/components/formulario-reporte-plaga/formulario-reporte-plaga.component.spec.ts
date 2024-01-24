import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReportePlagaComponent } from './formulario-reporte-plaga.component';

describe('FormularioReportePlagaComponent', () => {
  let component: FormularioReportePlagaComponent;
  let fixture: ComponentFixture<FormularioReportePlagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioReportePlagaComponent]
    });
    fixture = TestBed.createComponent(FormularioReportePlagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
