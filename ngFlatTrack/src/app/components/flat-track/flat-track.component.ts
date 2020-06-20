import {Component, OnInit} from '@angular/core';
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-flat-track',
  templateUrl: './flat-track.component.html',
  styleUrls: ['./flat-track.component.css']
})
export class FlatTrackComponent implements OnInit {

  races = [];

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


}
