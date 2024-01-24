import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConsejosComponent } from './lista-consejos.component';

describe('ListaConsejosComponent', () => {
  let component: ListaConsejosComponent;
  let fixture: ComponentFixture<ListaConsejosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaConsejosComponent]
    });
    fixture = TestBed.createComponent(ListaConsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
