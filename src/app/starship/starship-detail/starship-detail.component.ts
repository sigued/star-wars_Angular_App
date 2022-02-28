import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/_models/film';
import { People } from 'src/app/_models/People';
import { Starship } from 'src/app/_models/starship';
import { PeopleService } from 'src/app/_services/people.service';
import { StarshipsService } from 'src/app/_services/starships.service';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship: Starship;
  pilots: People[] = [];
  films: Film[] = [];

  constructor(private starshipService: StarshipsService, private route: ActivatedRoute, private router: Router,
    private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.loadStarship();
  }

  loadStarship() {
    this.starshipService.getStarship(this.route.snapshot.params.id).subscribe(starship => {
      this.starship = starship;
      for (const pilot of starship.pilots) {
        this.peopleService.getPeople(pilot).subscribe(response => {
          this.pilots.push(response);
        });
      }

      for (const film of starship.films) {
        this.starshipService.getFilms(film).subscribe(response => {
          this.films.push(response);
        });
      }
    });
  }

  getPilotId(pilotUrl: string) {
    const parts = (pilotUrl.split('/'));
    return Number(parts[parts.lastIndexOf("") - 1]);
  }

}
