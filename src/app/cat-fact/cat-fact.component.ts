import { Component, OnInit } from '@angular/core';
import { CatService } from './../cat.service';

@Component({
  selector: 'app-cat-fact',
  templateUrl: './cat-fact.component.html',
  styleUrls: ['./cat-fact.component.css'],
  //add it as a provider
  providers: [CatService]
})
export class CatFactComponent implements OnInit {

  constructor(public service : CatService) { 

  }

  ngOnInit(): void {
    this.service.getCatFact();
  }

}
