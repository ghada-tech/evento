import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class HomepageComponent implements OnInit, OnDestroy {
  title = 'evento';
  showUserChoice = false;
  navOpen = false;
  floatingMenuOpen = false;

  // sticky / dynamic header
  isSticky = false;
  isHidden = false; // hide on scroll down
  private lastScrollTop = 0;

  faq = [
    {
      question: 'Qu\'est-ce qu\'Evento ?',
      answer: 'Evento est votre portail central pour découvrir et rejoindre des ateliers, formations, clubs et événements scolaires passionnants.',
      open: false
    },
    {
      question: 'Comment je m\'inscris à un atelier ?',
      answer: 'Créez un compte utilisateur, explorez les ateliers disponibles, et cliquez sur "S\'inscrire" pour rejoindre celui qui vous intéresse.',
      open: false
    },
    {
      question: 'Je suis organisateur, comment créer une activité ?',
      answer: 'Inscrivez-vous en tant qu\'organisateur, accédez au tableau de bord, et utilisez l\'option "Créer une activité" pour mettre en ligne votre contenu.',
      open: false
    },
    {
      question: 'Les inscriptions sont-elles gratuites ?',
      answer: 'La plupart de nos activités sont gratuites. Certains événements spécialisés peuvent avoir une participation demandée.',
      open: false
    },
    {
      question: 'Puis-je annuler mon inscription ?',
      answer: 'Oui, vous pouvez annuler votre inscription jusqu\'à 48 heures avant l\'événement depuis votre profil.',
      open: false
    }
  ];

  // bound handler so we can remove it later
  private onScrollHandler = this.onScroll.bind(this);

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScrollHandler, { passive: true });
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.onScrollHandler);
  }

  onScroll(): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = st > 80;

    if (st > this.lastScrollTop && st > 120) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }

    this.lastScrollTop = st <= 0 ? 0 : st;
  }

  openUserPopup() {
    this.showUserChoice = true;
  }

  closeUserChoice() {
    this.showUserChoice = false;
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  closeNav() {
    this.navOpen = false;
  }

  toggleFAQ(index: number) {
    this.faq[index].open = !this.faq[index].open;
  }

  toggleFloatingMenu() {
    this.floatingMenuOpen = !this.floatingMenuOpen;
  }

  // Events listing for "Formations & Soirées"
  
  events = [
    {
      title: "Atelier de Développement Web Full-Stack",
      date: "2024-12-15",
      description:
        "Maîtrisez les technologies web de demain. Un atelier intensif pour bâtir des applications complètes.",
     image: "/fullstak.jpg"

    },
    {
      title: "Conférence : L'IA au Service de la Créativité",
      date: "2025-01-20",
      description:
        "Venez échanger avec des experts sur l’impact révolutionnaire de l’IA dans les arts et le design.",
      image: "https://i.imgur.com/6xLZyWe.jpeg"
    },
    {
      title: "Soirée Universitaire : Nuit des Étoiles Filantes",
      date: "2024-11-25",
      description:
        "Une soirée mémorable pour célébrer la science et la camaraderie sous le ciel étoilé.",
      image: "https://i.imgur.com/okIKd9D.jpeg"
    },
    {
      title: "Workshop : Création de Jeux Vidéo Indépendants",
      date: "2025-02-10",
      description:
        "Apprenez les bases du développement de jeux vidéo dans cet atelier pratique et ludique.",
      image: "https://i.imgur.com/lEViGff.jpeg"
    }
  ];

  // Section Nos Tops
  tops = [
    {
      category: "Formation",
      price: 150,
      title: "Code Avancé",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
      description:
        "Maîtrisez les langages de programmation les plus demandés. Session intensive pour devenir un pro."
    },
    {
      category: "Événement",
      price: 25,
      title: "Soirée Gala",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80",
      description:
        "La soirée la plus attendue de l'année. Musique, danse et surprises garanties. Venez faire la fête !"
    },
    {
      category: "Workshop",
      price: 75,
      title: "Marketing Digital",
      image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?q=80",
      description:
        "Apprenez les stratégies gagnantes pour dominer le web. Un atelier interactif pour booster vos compétences."
    }
  ];

  // Témoignages / Reviews
  temoignages = [
    {
      name: 'Julien',
      role: 'Étudiant',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      message: "J'ai trouvé un atelier incroyable qui a changé ma vision des choses. Merci !"
    },
    {
      name: 'Fatima',
      role: 'Chercheuse',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      message: "Les événements universitaires sont une mine d'or pour le networking. Très bien organisés."
    },
    {
      name: 'David',
      role: 'Professionnel',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      message: "Une plateforme indispensable pour rester informé des opportunités de formation continue."
    }
  ];
}