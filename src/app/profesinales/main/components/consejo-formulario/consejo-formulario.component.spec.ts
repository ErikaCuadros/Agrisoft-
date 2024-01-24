import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsejoFormularioComponent } from './consejo-formulario.component';

describe('ConsejoFormularioComponent', () => {
  let component: ConsejoFormularioComponent;
  let fixture: ComponentFixture<ConsejoFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsejoFormularioComponent]
    });
    fixture = TestBed.createComponent(ConsejoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
