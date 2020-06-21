import {Component, OnInit} from '@angular/core';
import {RaceService} from "../../services/race.service";
import {Race} from "../../models/race";
import {log} from "util";

@Component({
  selector: 'app-flat-track',
  templateUrl: './flat-track.component.html',
  styleUrls: ['./flat-track.component.css']
})
export class FlatTrackComponent implements OnInit {

  trackLength = 'All';
  races = [];
  raceLengths = [
    'All',
    '.25',
    '.50',
    '.75',
    '1'
  ];
  selected = null;
  create: boolean;
  newRace = new Race();

  constructor(private raceService: RaceService) {
  }

  ngOnInit(): void {
    this.loadRaces();
  }

  loadRaces() {
    this.raceService.index().subscribe(
      data => this.races = data,

      err => console.log('error' + err)
    );
  }

  displayRace(race: Race) {
    this.selected = race;
  }

  updateRace(race: Race){
    this.raceService.updateRace(race).subscribe(
      data => {this.selected = null;
        this.loadRaces();
      },
      err => console.log(err)
    );
  }

  deleteRace(id: number){
    this.raceService.deleteRace(id).subscribe(
      data => this.loadRaces(),
      err => console.log(err)
    );
  }

  createRace(race: Race){
    this.raceService.createRace(race).subscribe(
      data => {this.create = false; this.loadRaces(); this.newRace = new Race()},
      err => console.log(err)
    );
  }


}
