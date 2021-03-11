import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DropdownDataService } from '../services/dropdown-data.service';

/*
jsonplaceholde is used for dummy data
  
format of dummy data :-
{
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  .
  .
  .
  .
  200 data objects
}


title is used for populating the dropdown.
*/

export interface Items {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DropdownComponent implements OnInit {

  items : Items[] = [];
  
  constructor(
    private dropdownDataService: DropdownDataService
  ) { }

  ngOnInit(): void {
     this.retrieveItems();
  }

  retrieveItems() {
    this.dropdownDataService.retrieveDropdownList().subscribe(
      response => {
        this.items = response;
        console.log(this.items)
      }
    );  
  }
}
