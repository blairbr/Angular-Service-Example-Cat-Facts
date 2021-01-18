import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cat {
  //this will match up with what's coming back in the JSON response
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatService {
  public catFacts: Cat[] = [];
  urlString = 'https://cat-fact.herokuapp.com/facts';

  constructor(private http: HttpClient) {}

  getCatFact() {
    return this.http.get(this.urlString).subscribe(
      (data) => {
        console.log("data", data);
        for (const key in data) {
          console.log("key", key);
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            const catFact = data[key];
            console.log("catfact", catFact);
            this.catFacts.push(catFact);
          }
        }
      },
      (error) => console.log(error)
    );
  }
}
