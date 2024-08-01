import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonerContraseniaComponent } from './poner-contrasenia.component';

describe('PonerContraseniaComponent', () => {
  let component: PonerContraseniaComponent;
  let fixture: ComponentFixture<PonerContraseniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PonerContraseniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PonerContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
