import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Starship } from 'src/app/_models/starship';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.css']
})
export class StarshipCardComponent implements OnInit {
  @Input() starship: Starship;

  constructor() { }

  ngOnInit(): void {
  }

  getStarshipId(str: string) {
    const parts = (this.starship.url.split('/'));
    // console.log(Number(parts[parts.lastIndexOf("") - 1]))
    return Number(parts[parts.lastIndexOf("") - 1]);
  }

}
