import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPerfilesComponent } from './lista-perfiles.component';

describe('ListaPerfilesComponent', () => {
  let component: ListaPerfilesComponent;
  let fixture: ComponentFixture<ListaPerfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPerfilesComponent]
    });
    fixture = TestBed.createComponent(ListaPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
