import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/race';

  constructor() { }


  //get post put delete
}
