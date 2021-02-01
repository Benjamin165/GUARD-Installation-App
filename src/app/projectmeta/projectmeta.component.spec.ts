import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmetaComponent } from './projectmeta.component';

describe('ProjectmetaComponent', () => {
  let component: ProjectmetaComponent;
  let fixture: ComponentFixture<ProjectmetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectmetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
