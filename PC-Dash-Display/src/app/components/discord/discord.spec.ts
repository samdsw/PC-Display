import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discord } from './discord';

describe('Discord', () => {
  let component: Discord;
  let fixture: ComponentFixture<Discord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Discord],
    }).compileComponents();

    fixture = TestBed.createComponent(Discord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
