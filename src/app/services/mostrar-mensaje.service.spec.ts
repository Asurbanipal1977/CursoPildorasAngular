import { TestBed } from '@angular/core/testing';

import { MostrarMensajeService } from './mostrar-mensaje.service';

describe('MostrarMensajeService', () => {
  let service: MostrarMensajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarMensajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
