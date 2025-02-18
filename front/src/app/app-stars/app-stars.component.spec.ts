import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStarsComponent } from './app-stars.component';

describe('AppStarsComponent', () => {
  let component: AppStarsComponent;
  let fixture: ComponentFixture<AppStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
