import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingmetaComponent } from './buildingmeta.component';

describe('BuildingmetaComponent', () => {
  let component: BuildingmetaComponent;
  let fixture: ComponentFixture<BuildingmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
