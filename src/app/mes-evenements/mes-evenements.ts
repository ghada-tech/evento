import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PopupformulaireComponent } from '../popupformulaire/popupformulaire';

interface Event {
  id: number;
  title: string;
  location: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  photoUrl?: string; // URL de l'image pour affichage
}

@Component({
  selector: 'app-mes-evenements',
  standalone: true,
  imports: [CommonModule, FormsModule, PopupformulaireComponent],
  templateUrl: './mes-evenements.html',
  styleUrls: ['./mes-evenements.css']
})
export class MesEvenementsComponent {

  events: Event[] = [];
  nextId = 1;

  showPopup = false;
  editEvent: Event | null = null;

  openCreatePopup() {
    this.editEvent = null;
    this.showPopup = true;
  }

  openEditPopup(event: Event) {
    this.editEvent = { ...event };
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  saveEvent(eventData: any) {
    // Convertir File en URL si photo sélectionnée
    if (eventData.photo) {
      const reader = new FileReader();
      reader.onload = () => {
        eventData.photoUrl = reader.result as string;
        this.addOrUpdateEvent(eventData);
      };
      reader.readAsDataURL(eventData.photo);
    } else {
      this.addOrUpdateEvent(eventData);
    }
  }

  private addOrUpdateEvent(eventData: any) {
    if (this.editEvent) {
      const index = this.events.findIndex(e => e.id === this.editEvent!.id);
      if (index !== -1) this.events[index] = { ...eventData, id: this.editEvent!.id };
    } else {
      this.events.push({ ...eventData, id: this.nextId++ });
    }
    this.closePopup();
  }

  deleteEvent(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet événement ?')) {
      this.events = this.events.filter(e => e.id !== id);
    }
  }
}
