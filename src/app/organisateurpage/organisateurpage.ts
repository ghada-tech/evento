import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupformulaireComponent } from '../popupformulaire/popupformulaire';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-organisateurpage',
  standalone: true,
  imports: [CommonModule, PopupformulaireComponent,FooterComponent],
  templateUrl: './organisateurpage.html',
  styleUrls: ['./organisateurpage.css'],
})
export class OrganisateurpageComponent implements OnInit, OnDestroy {


  // NAVIGATION
  navOpen = false;

  // POPUP
  showPopup = false;
  showUserChoice = false;

  // STICKY HEADER
  isSticky = false;
  isHidden = false;
  private lastScrollTop = 0;

  // FAQ
  faq = [
    { question: 'Comment ajouter un événement ?', answer: 'Pour ajouter un événement...', open: false },
    { question: 'Quels formats de photo sont acceptés ?', answer: 'Nous acceptons...', open: false },
    { question: 'Est-il possible de modifier un événement existant ?', answer: 'Oui...', open: false },
    { question: 'Comment gérer les inscriptions ?', answer: 'Notre plateforme...', open: false },
    { question: 'Combien coûte la création d un événement ?', answer: 'La création...', open: false }
  ];

  // FLOATING MENU
  floatingMenuOpen = false;

  // AVIS
  avisList = [
    { name: 'Alexandre Dubois', text: 'Une plateforme incroyable...' },
    { name: 'Sophie Bernard', text: "J'ai pu gérer tous les aspects..." },
    { name: 'Mehdi Khan', text: "La meilleure solution..." },
    { name: 'Chloé Petit', text: "Une interface intuitive..." },
    { name: 'Lucas Moreau', text: "Grâce à cet outil..." },
    { name: 'Camille Lefevre', text: "La gestion des inscriptions..." }
  ];

  // SLIDER
  slides = [
    {
      image: 'assets/images/formation.jpg',
      icon: 'fas fa-walking',
      title: 'formation en marketing digital,',
      subtitle: 'Influence numérique'
    },
    {
      image: 'assets/images/isg.jpg',
      icon: 'fas fa-walking',
      title: 'Job Fair',
      subtitle: 'Potentiel illimité'
    },
    {
      image: 'assets/images/workshop.jpeg',
      icon: 'fas fa-walking',
      title: 'Workshop IA',
      subtitle: 'Futur automatisé'
    },
    {
      image: 'assets/images/powerbi.jpeg',
      icon: 'fas fa-walking',
      title: 'Formation power BI',
      subtitle: 'Reporting dynamique'
    }
  ];
  currentIndex = 0;
  intervalId: any;

  // SCROLL HANDLER
  private onScrollHandler = this.onScroll.bind(this);

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScrollHandler, { passive: true });
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScrollHandler);
    clearInterval(this.intervalId);
  }

  onScroll(): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = st > 80;
    this.isHidden = st > this.lastScrollTop && st > 120;
    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  // NAVIGATION
  toggleNav() { this.navOpen = !this.navOpen; }
  closeNav() { this.navOpen = false; }

  // POPUP
  openForm() { this.showPopup = true; }
  closeForm() { this.showPopup = false; }
  openUserPopup() { this.showUserChoice = true; }
  closeUserChoice() { this.showUserChoice = false; }

  // FAQ
  toggleFAQ(index: number) { this.faq[index].open = !this.faq[index].open; }

  // FLOATING MENU
  toggleFloatingMenu() { this.floatingMenuOpen = !this.floatingMenuOpen; }

  // SLIDER METHODS
  setActive(index: number) { this.currentIndex = index; }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }
}
