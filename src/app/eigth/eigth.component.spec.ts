import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EigthComponent } from './eigth.component';

describe('EigthComponent', () => {
  let component: EigthComponent;
  let fixture: ComponentFixture<EigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EigthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
