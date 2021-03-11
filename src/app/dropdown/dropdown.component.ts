import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DropdownDataService } from '../services/dropdown-data.service';

// Format of a dummy data
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
