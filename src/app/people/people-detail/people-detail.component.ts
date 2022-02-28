import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/_models/film';
import { People } from 'src/app/_models/People';
import { Starship } from 'src/app/_models/starship';
import { PeopleService } from 'src/app/_services/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  pilot: People;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadPilot();
  }

  loadPilot() {
    this.peopleService.getPeopleById(this.route.snapshot.params.id).subscribe(response => {
      this.pilot = response;
    });
  }
}
