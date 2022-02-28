import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Starship } from '../_models/starship';
import { map } from 'rxjs/operators';
import { People } from '../_models/People';
import { Film } from '../_models/film';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  baseUrl = environment.apiUrl;
  starships: Starship[] = [];
  starshipCache = new Map();
  filmCache = new Map();

  constructor(private http: HttpClient) { }

  getStarships(page: number) {
    const response = this.starshipCache.get(page);
    if (response) {
      return of(response);
    }

    return this.http.get<Starship[]>(this.baseUrl + 'starships' + '/?page=' + page).pipe(
      map(res => {
        this.starshipCache.set(page, res);
        return res;
      })
    );
  }

  getStarship(id: number) {
    const starshipUrl = this.baseUrl + `starships/${id}/`;
    const starship = [...this.starshipCache.values()].reduce((arr, elem) => arr.concat(elem.results), [])
      .find((vehicule: Starship) => vehicule.url === starshipUrl);

    // console.log(starship);
    // console.log(starshipUrl);

    if (starship) {
      return of(starship);
    }

    return this.http.get<Starship>(starshipUrl);
  }

  getFilms(filmUrl: string) {
    const response = this.filmCache.get(filmUrl);
    if (response) {
      return of(response);
    }

    return this.http.get<Film>(filmUrl).pipe(
      map(res => {
        this.filmCache.set(filmUrl, res);
        return res;
      })
    );
  }

}
