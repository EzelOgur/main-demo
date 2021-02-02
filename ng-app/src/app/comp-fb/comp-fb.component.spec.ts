import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFbComponent } from './comp-fb.component';

describe('CompFbComponent', () => {
  let component: CompFbComponent;
  let fixture: ComponentFixture<CompFbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompFbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
