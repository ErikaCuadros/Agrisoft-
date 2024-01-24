import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInformeProfComponent } from './lista-informe-prof.component';

describe('ListaInformeProfComponent', () => {
  let component: ListaInformeProfComponent;
  let fixture: ComponentFixture<ListaInformeProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaInformeProfComponent]
    });
    fixture = TestBed.createComponent(ListaInformeProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
