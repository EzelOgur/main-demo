import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizCompComponent } from './wiz-comp.component';

describe('WizCompComponent', () => {
  let component: WizCompComponent;
  let fixture: ComponentFixture<WizCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
