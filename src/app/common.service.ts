import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { List } from './server/list';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  delete() {
    throw new Error('Method not implemented.');
  }

 
  URL="http://localhost:3000/list"
 

  constructor(private _http:HttpClient) { }

  getList(){
   return this._http.get(this.URL);
  }

  addToList(data: any){
    return this._http.post(this.URL, data);
   }

  //  deleteList(id: any){
  //   return this._http.delete<List>(`${this.URL}/${id}`);
  //  }
}
