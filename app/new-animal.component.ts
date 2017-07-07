import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
    selector: "new-animal",
    template: `
    <h3>Add a new animal to the mad house.</h3>
    <div>
    <label>Enter a species:</label>
    <input #species>
    </div>
    <div>
    <label>Enter a name:</label>
    <input #name>
    </div>
    <div>
    <label>How old is our new friend:</label>
    <input #age>
    </div>
    <div>
    <label>Enter a diet type:</label>
    <input #diet>
    </div>
    <div>
    <label>Enter a location:</label>
    <input #location>
    </div>
    <div>
    <label>How many caretakers will be needed?:</label>
    <input #caretaker>
    </div>
    <div>
    <label>Enter a sex:</label>
    <input #sex>
    </div>
    <div>
    <label>What does this animal especially like?:</label>
    <input #like>
    </div>
    <div>
    <label>What does this animal especially dislike?:</label>
    <input #dislike>
    </div>
    <div>
    <button (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretaker.value, sex.value, like.value, dislike.value); species.value=''; name.value=''; age.value=''; diet.value=''; lacation.value=''; caretaker.value=''; sex.value=''; like.value=''; dislike.value='';">Submit</button>
    </div>
    `
})

export class NewAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(species: string, name: string, age: number, diet: string, location: string, caretaker: number, sex: string, like: string, dislike: string) {
        var newAnimal: Animal = new Animal(species, name, age, diet, location, caretaker, sex, like, dislike);
        this.newAnimalSender.emit(newAnimal);
    }

}
