import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {Race} from "../models/race";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private baseUrl = 'http://localhost:8084/';
  private url = this.baseUrl + 'api/race';

  constructor(private http: HttpClient) { }


  index() {
    return this.http.get<Race[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }
  //get post put delete
}
