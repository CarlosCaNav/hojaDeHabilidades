import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearContraseniaComponent } from './crear-contrasenia.component';

describe('CrearContraseniaComponent', () => {
  let component: CrearContraseniaComponent;
  let fixture: ComponentFixture<CrearContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearContraseniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
