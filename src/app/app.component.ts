import { Component, OnInit } from '@angular/core';
import { Pagination } from './_models/pagination';
import { Starship } from './_models/starship';
import { StarshipsService } from './_services/starships.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // starships: Starship[];
  // pagination: Pagination;
  // pageNumber = 1;
  // pageSize = 5;

  constructor(private starshipService: StarshipsService) { }

  ngOnInit(): void { 
    // this.loadStarships();
  }

  // loadStarships() {
  //   this.starshipService.getStarships(this.pageNumber, this.pageSize).subscribe(response => {
  //     // console.log(response);
  //     this.starships = response.result['results'];
  //     // this.pagination = response.pagination;
  //   });
  // }

  // getStarshipId(str: string) {
  //   console.log(str);
  //   const parts = (str.split('/'));
  //   const id = parts[parts.lastIndexOf("") - 1];
  //   return id;
  // }

}
