import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login-organisateur',
  standalone: true,
  templateUrl: './login-organisateur.html',
  styleUrl: './login-organisateur.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginOrganisateurComponent implements OnInit {

  ngOnInit(): void {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn?.addEventListener('click', () => {
      container?.classList.add('active');
    });

    loginBtn?.addEventListener('click', () => {
      container?.classList.remove('active');
    });
  }

}
