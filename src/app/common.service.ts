import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

 
  URL="http://localhost:3000/list"
 

  constructor(private _http:HttpClient) { }

  getList(){
   return this._http.get(this.URL);
  }

  addToList(data: any){
    return this._http.post(this.URL, data);
   }
}
