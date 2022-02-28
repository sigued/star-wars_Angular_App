import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_models/pagination';
import { Starship } from 'src/app/_models/starship';
import { StarshipsService } from 'src/app/_services/starships.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starships: Starship[];
  pagination: Pagination = {} as Pagination;
  pageNumber = 1;

  constructor(private starshipService: StarshipsService) { }

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships() {
    this.starshipService.getStarships(this.pageNumber).subscribe(response => {
      this.starships = response.results;
      this.pagination = {
        count: response.count,
        next: response.next,
        previous: response.previous,
      };
    });
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadStarships();
  }
}
