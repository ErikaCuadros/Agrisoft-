import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilesProfecionalesComponent } from './perfiles-profecionales.component';

describe('PerfilesProfecionalesComponent', () => {
  let component: PerfilesProfecionalesComponent;
  let fixture: ComponentFixture<PerfilesProfecionalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilesProfecionalesComponent]
    });
    fixture = TestBed.createComponent(PerfilesProfecionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
