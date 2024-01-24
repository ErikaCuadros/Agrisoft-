import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfecionalesComponent } from './lista-profecionales.component';

describe('ListaProfecionalesComponent', () => {
  let component: ListaProfecionalesComponent;
  let fixture: ComponentFixture<ListaProfecionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaProfecionalesComponent]
    });
    fixture = TestBed.createComponent(ListaProfecionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
