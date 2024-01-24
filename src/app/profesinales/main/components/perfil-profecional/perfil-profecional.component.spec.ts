import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfecionalComponent } from './perfil-profecional.component';

describe('PerfilProfecionalComponent', () => {
  let component: PerfilProfecionalComponent;
  let fixture: ComponentFixture<PerfilProfecionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilProfecionalComponent]
    });
    fixture = TestBed.createComponent(PerfilProfecionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
