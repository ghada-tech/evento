import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Organisateurpage } from './organisateurpage';

describe('Organisateurpage', () => {
  let component: Organisateurpage;
  let fixture: ComponentFixture<Organisateurpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Organisateurpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Organisateurpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
