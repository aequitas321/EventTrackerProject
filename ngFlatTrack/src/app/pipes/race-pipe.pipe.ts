import { Pipe, PipeTransform } from '@angular/core';
import {Race} from "../models/race";

@Pipe({
  name: 'racePipe'
})
export class RacePipePipe implements PipeTransform {

  transform(raceArray: Race[], trackLength: string): Race[] {
    let lengthArray = [];
    if (trackLength === 'All'){
      return raceArray;
    }

    for (let i=0; i < raceArray.length; i++){
      if (raceArray[i].length === parseFloat(trackLength)){
        lengthArray.push(raceArray[i]);
      }
    }
    return lengthArray;
  }

}
