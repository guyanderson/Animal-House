import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: 'app-root',
    template: `
    <div class="container">
        <h1>Animal House Zoo</h1>
        <br>
        <br>
        <div id="main" *ngIf="main">
            <button (click)="showAddNew()">Add an animal to the Zoo</button>
            <br>
            <br>
            <animal-list [childAnimalList]="masterAnimalList" (clickSender)="showEdit()" (clickSender)="editAnimal($event)"></animal-list>
        </div>

        <div id="addNew" *ngIf="addNew">
            <new-animal (newAnimalSender)="showMain()" (newAnimalSender)="addAnimal($event)"></new-animal>
        </div>

        <div id="editView" *ngIf="editView">
            <edit-animal [childSelectedAnimal]="selectedAnimal" (editDoneSender)="finishedEditing()" (editDoneSender)="showMain()"></edit-animal>
        </div>

    </div>
    `
})

export class AppComponent {
    selectedAnimal = null;
    main: boolean = true
    addNew: boolean = false;
    editView: boolean = false;


    masterAnimalList: Animal[] = [
        new Animal('Arctic Fox','Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
        new Animal('Ocelot','Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),
        new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud Noises')
    ];

    showMain() {
        this.main = true;
        this.addNew = false;
        this.editView = false;
    }

    showAddNew() {
        this.main = false;
        this.addNew = true;
        this.editView = false;
    }

    showEdit() {
        this.main = false;
        this.addNew = false;
        this.editView = true;
    }

    editAnimal(clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    }

    addAnimal(newAnimal: Animal) {
        this.masterAnimalList.push(newAnimal);
    }
    finishedEditing() {
        this.selectedAnimal = null;
    }

}
