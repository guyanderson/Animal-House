import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
      <div *ngIf="childSelectedAnimal">
        <h3><strong>Name:</strong>{{childSelectedAnimal.name}}</h3>
        <hr>
        <h3>Edit Animal:</h3>
        <label>Edit name:</label>
        <input [(ngModel)]="childSelectedAnimal.name"><br>
        <label>Edit age:</label>
        <input [(ngModel)]="childSelectedAnimal.age"><br>
        <label>Edit the number of caretakers needed:</label>
        <input [(ngModel)]="childSelectedAnimal.caretaker"><br>
        <button (click)="editDoneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() editDoneSender = new EventEmitter();

  editDoneButtonClicked() {
    this.editDoneSender.emit();
  }

}
