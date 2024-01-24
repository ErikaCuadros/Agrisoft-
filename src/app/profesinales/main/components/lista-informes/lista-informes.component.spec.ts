import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInformesComponent } from './lista-informes.component';

describe('ListaInformesComponent', () => {
  let component: ListaInformesComponent;
  let fixture: ComponentFixture<ListaInformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaInformesComponent]
    });
    fixture = TestBed.createComponent(ListaInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
