import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupformulaireComponent } from './popupformulaire';

describe('PopupformulaireComponent', () => {
  let component: PopupformulaireComponent;
  let fixture: ComponentFixture<PopupformulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupformulaireComponent]  // ← standalone component
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupformulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
