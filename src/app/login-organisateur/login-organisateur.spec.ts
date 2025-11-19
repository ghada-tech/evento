import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrganisateur } from './login-organisateur';

describe('LoginOrganisateur', () => {
  let component: LoginOrganisateur;
  let fixture: ComponentFixture<LoginOrganisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginOrganisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOrganisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
