import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MovetypesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovetypesProvider {

  dns:string = "http://192.168.1.100:8000/";
  constructor(public http: Http) {
    
  }
getMovesType()
{
 return  this.http.get(this.dns+"movessubtype/").map(res => res.json());
}


}
