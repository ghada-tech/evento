import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Event {
  title: string;
  image: string;
  category: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  available: number;
  total: number;
  reserved: boolean;
  cancelAllowedAt: number | null;
}

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eventpage.html',
  styleUrls: ['./eventpage.css']
})
export class EventpageComponent implements OnInit {

  search = signal('');
  activeFilter = signal('All');

  events = signal<Event[]>([
    {
      title: 'Advanced Web Development Workshop',
      image: 'assets/web-dev.jpg',
      category: 'Workshop',
      description: 'Learn modern web development: React, Node.js, cloud deployment...',
      date: '2025-12-15',
      time: '14:00',
      location: 'Computer Science Building, Room 301',
      organizer: 'Dr. Sarah Johnson',
      available: 12, total: 40,
      reserved: false,
      cancelAllowedAt: null
    },
    {
      title: 'Data Science Fundamentals',
      image: 'assets/data-science.jpg',
      category: 'Formation',
      description: 'Hands-on training with Python, statistics and machine learning basics...',
      date: '2025-12-18',
      time: '10:00',
      location: 'Innovation Hub, Hall A',
      organizer: 'Prof. Michael Chen',
      available: 25, total: 60,
      reserved: false,
      cancelAllowedAt: null
    },
    {
      title: 'Photography Club: Night Photography',
      image: 'assets/night-photo.jpg',
      category: 'Club',
      description: 'Learn long exposure, light painting and night shooting techniques...',
      date: '2025-12-20',
      time: '19:00',
      location: 'Main Campus Plaza',
      organizer: 'Photography Club',
      available: 8, total: 25,
      reserved: false,
      cancelAllowedAt: null
    }
  ]);

  notifications = signal<{ message: string; type: string }[]>([]);

  filteredEvents = computed(() => {
    const search = this.search().toLowerCase();
    const filter = this.activeFilter();

    return this.events().filter(ev => {
      const matchSearch =
        ev.title.toLowerCase().includes(search) ||
        ev.category.toLowerCase().includes(search);

      const matchFilter =
        filter === 'All' || ev.category.toLowerCase() === filter.toLowerCase();

      return matchSearch && matchFilter;
    });
  });

  ngOnInit() {}

  private getTimestamp(ev: Event): number {
    const [y, m, d] = ev.date.split('-').map(Number);
    const [h, min] = ev.time.split(':').map(Number);
    return Date.UTC(y, m - 1, d, h, min, 0);
  }

  toggleReservation(ev: Event) {
    const now = Date.now();
    const eventTs = this.getTimestamp(ev);
    const cancelLimit = eventTs - (48 * 60 * 60 * 1000);

    const eventsArr = [...this.events()];
    const index = eventsArr.indexOf(ev);
    const updated = { ...ev };

    if (ev.reserved) {
      if (now < cancelLimit) {
        return this.notify("Impossible d'annuler avant 48h.", 'error');
      }
      updated.reserved = false;
      updated.available++;
      updated.cancelAllowedAt = null;
      this.notify('Votre réservation a été annulée.', 'error');
    } else {
      if (!ev.available) {
        return this.notify('Plus de places disponibles.', 'error');
      }
      updated.reserved = true;
      updated.available--;
      updated.cancelAllowedAt = cancelLimit;
      this.notify('Réservation réussie !', 'success');
    }

    eventsArr[index] = updated;
    this.events.set(eventsArr);
  }

  notify(message: string, type: string) {
    const notif = { message, type };
    this.notifications.update(n => [...n, notif]);

    setTimeout(() => {
      this.notifications.update(n => n.filter(e => e !== notif));
    }, 3500);
  }

  getCountdown(ev: Event) {
    if (!ev.cancelAllowedAt || !ev.reserved) return '';
    const diff = ev.cancelAllowedAt - Date.now();
    if (diff <= 0) return "Vous pouvez annuler";
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `Annulation possible dans ${h}h ${m}m`;
  }
}
