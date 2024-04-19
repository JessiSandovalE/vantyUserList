import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  standalone: true,
  imports: [],
  templateUrl: './filter-box.component.html',
  styleUrl: './filter-box.component.scss'
})
export class FilterBoxComponent {
  @Output() filterText = new EventEmitter<string>();
  searchText:string = '';

  sendSearchText(event:any){
    this.searchText = event.target.value;
    this.filterText.emit(this.searchText);
  }

}
