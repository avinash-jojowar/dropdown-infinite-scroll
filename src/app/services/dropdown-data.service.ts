import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Items } from '../dropdown/dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {
  
  constructor(
    private http: HttpClient
  ) { }

  retrieveDropdownList() {
    return this.http.get<Items[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
