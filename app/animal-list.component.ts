import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'animal-list',
  template: `
  <ul>

    <li *ngFor="let currentAnimal of childAnimalList"><strong>Species:</strong> {{currentAnimal.species}}<br><strong>Name:</strong> {{currentAnimal.name}}<br><strong>Age:</strong> {{currentAnimal.age}}<br><strong>Diet:</strong> {{currentAnimal.diet}}<br><strong>Location:</strong> {{currentAnimal.location}}<br><strong>Number of Caretakers:</strong> {{currentAnimal.caretaker}}<br><strong>Sex:</strong> {{currentAnimal.sex}}<br><strong>Likes:</strong> {{currentAnimal.like}}<br><strong>dislike:</strong> {{currentAnimal.dislike}}<br><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button><br><br><br></li>

  </ul>
  `
})

export class AnimalListComponent {
    @Input() childAnimalList: Animal[];
    @Output() clickSender = new EventEmitter;

    editButtonHasBeenClicked(animalToEdit: Animal) {
        this.clickSender.emit(animalToEdit);
    }

}
