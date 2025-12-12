import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class FooterComponent {
  
  constructor() {}

  // Vous pouvez ajouter des méthodes ici si nécessaire
  // Par exemple pour gérer la soumission de la newsletter
  
  onNewsletterSubmit(email: string): void {
    console.log('Newsletter subscription:', email);
    // Ajoutez votre logique d'inscription à la newsletter ici
  }
}