import {Injectable} from '@angular/core';
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

  constructor(private http: HttpClient) {
  }


  index() {
    return this.http.get<Race[]>(this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  show(id: number) {
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Not a valid race!');
      })
    );
  }

  updateRace(race: Race) {
    return this.http.post(`${this.url}/${race.id}`, race).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Unable to update');
      })
    );
  }

  deleteRace(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Unable to update');
      })
    );
  }

  createRace(race: Race) {
    return this.http.put(this.url, race).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Unable to update');
      })
    );
  }

  // put
}
