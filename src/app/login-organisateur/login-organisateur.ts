import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login-organisateur',
  standalone: true,
  templateUrl: './login-organisateur.html',
  styleUrl: './login-organisateur.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginOrganisateurComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    // Initialisation
  }

  ngAfterViewInit(): void {
    // Attendre que le DOM soit complètement chargé
    setTimeout(() => {
      const container = document.getElementById('container');
      const registerBtn = document.getElementById('register');
      const loginBtn = document.getElementById('login');

      console.log('Container:', container);
      console.log('Register Button:', registerBtn);
      console.log('Login Button:', loginBtn);

      if (registerBtn && container) {
        registerBtn.addEventListener('click', () => {
          console.log('Register button clicked');
          container.classList.add('active');
        });
      }

      if (loginBtn && container) {
        loginBtn.addEventListener('click', () => {
          console.log('Login button clicked');
          container.classList.remove('active');
        });
      }
    }, 100);
  }
}