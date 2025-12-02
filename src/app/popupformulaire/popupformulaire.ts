import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popupformulaire',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popupformulaire.html',
  styleUrls: ['./popupformulaire.css']
})
export class PopupformulaireComponent {

  @Input() eventData: any = {
    title: '',
    location: '',
    dateStart: '',
    dateEnd: '',
    description: '',
    photo: null
  };

  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<any>();

  onPhotoSelected(event: any) {
    this.eventData.photo = event.target.files[0];
  }

  submitForm() {
    this.save.emit(this.eventData); // émettre les données au parent
    this.close.emit();
  }

  closePopup() {
    this.close.emit();
  }
}
