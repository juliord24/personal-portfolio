import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceWithComponent } from './experience-with.component';

describe('ExperienceWithComponent', () => {
  let component: ExperienceWithComponent;
  let fixture: ComponentFixture<ExperienceWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceWithComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
