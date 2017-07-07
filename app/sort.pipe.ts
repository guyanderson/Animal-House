import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sort",
  pure: false
})

export class SortPipe implements PipeTransform {

transform(input: Animal[], sortChoice) {
    var output: Animal[] = [];
    if(sortChoice === "young") {
        for (var i = 0; i < input.length; i++) {
            if(input[i].age <= 2) {
                output.push(input[i]);
            }
        }
        return output;
    }   else if (sortChoice === "old") {
            for (var i = 0; i < input.length; i++) {
                if(input[i].age >= 3) {
                    output.push(input[i]);
                }
            }
        return output;
    }   else    {
        return input;
        }
    }
}
