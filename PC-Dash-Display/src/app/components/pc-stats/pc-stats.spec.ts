import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcStats } from './pc-stats';

describe('PcStats', () => {
  let component: PcStats;
  let fixture: ComponentFixture<PcStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PcStats],
    }).compileComponents();

    fixture = TestBed.createComponent(PcStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
