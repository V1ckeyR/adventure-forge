import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePixelArtComponent } from './core-pixel-art.component';

describe('CorePixelArtComponent', () => {
  let component: CorePixelArtComponent;
  let fixture: ComponentFixture<CorePixelArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorePixelArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorePixelArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
