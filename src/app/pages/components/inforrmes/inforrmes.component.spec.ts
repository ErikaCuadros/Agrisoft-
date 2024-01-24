import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforrmesComponent } from './inforrmes.component';

describe('InforrmesComponent', () => {
  let component: InforrmesComponent;
  let fixture: ComponentFixture<InforrmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InforrmesComponent]
    });
    fixture = TestBed.createComponent(InforrmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
