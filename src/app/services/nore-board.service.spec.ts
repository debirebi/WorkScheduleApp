import { TestBed } from '@angular/core/testing';

import { NoteBoardService } from './note-board.service';

describe('NoteBoardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NoteBoardService = TestBed.get(NoteBoardService);
    expect(service).toBeTruthy();
  });
});
