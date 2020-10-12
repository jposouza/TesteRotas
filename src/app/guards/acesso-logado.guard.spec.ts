import { TestBed } from '@angular/core/testing';

import { AcessoLogadoGuard } from './acesso-logado.guard';

describe('AcessoLogadoGuard', () => {
  let guard: AcessoLogadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AcessoLogadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
