import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';



@Component({
  selector: 'animal-list',
  template: `
    <h4>Sort animals by age</h4>
    <select (change)="onSort($event.target.value)">
        <option value="all">All Animals</option>
        <option value="young">Animals ages 2 or less</option>
        <option value="old">Animals older than 2</option>
    </select>
    <br>
    <br>
    <br>
    <h4>Animals in our zoo</h4>
    <ul>
        <li *ngFor="let currentAnimal of childAnimalList | sort:sortChoice"><strong>Species:</strong> {{currentAnimal.species}}<br><strong>Name:</strong> {{currentAnimal.name}}<br><strong>Age:</strong> {{currentAnimal.age}}<br><strong>Diet:</strong> {{currentAnimal.diet}}<br><strong>Location:</strong> {{currentAnimal.location}}<br><strong>Number of Caretakers:</strong> {{currentAnimal.caretaker}}<br><strong>Sex:</strong> {{currentAnimal.sex}}<br><strong>Likes:</strong> {{currentAnimal.like}}<br><strong>dislike:</strong> {{currentAnimal.dislike}}<br><button (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button><br><br><br></li>
    </ul>
    `
})

export class AnimalListComponent {
    @Input() childAnimalList: Animal[];
    @Output() clickSender = new EventEmitter;

    sortChoice: string = "all";

    onSort(optionFromMenu) {
        this.sortChoice = optionFromMenu;
    }

    editButtonHasBeenClicked(animalToEdit: Animal) {
        this.clickSender.emit(animalToEdit);
    }

}
