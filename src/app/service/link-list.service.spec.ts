import { TestBed } from '@angular/core/testing';

import { LinkListService } from './link-list.service';

describe('LinkListService', () => {
  let service: LinkListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
