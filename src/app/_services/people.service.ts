import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { People } from '../_models/People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  baseUrl = environment.apiUrl;
  people: People[] = [];
  peopleCache = new Map();

  constructor(private http: HttpClient) { }

  getPeople(peopleUrl: string) {
    const response = this.peopleCache.get(peopleUrl);
    if (response) {
      return of(response);
    }

    return this.http.get<People[]>(peopleUrl).pipe(
      map(res => {
        this.peopleCache.set(peopleUrl, res);
        return res;
      })
    );
  }

  getPeopleById(id: number) {
    const pilotUrl = this.baseUrl + `people/${id}/`;
    const response = this.peopleCache.get(pilotUrl);
    if (response) {
      return of(response);
    }

    return this.http.get<People>(pilotUrl).pipe(
      map(res => {
        this.peopleCache.set(pilotUrl, res);
        return res;
      })
    );
  }

  // getFilms(filmUrl: string) {
  //   return this.http.get<Film>(filmUrl);
  // }
}
