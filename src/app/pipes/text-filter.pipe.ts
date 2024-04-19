import  { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter',  standalone: true,})

export class NameFilterPipe implements PipeTransform {
  transform(items:any, searchText:string): any {
    if(!items) return[];
    if(!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item:any) => {
      return item.name.toLowerCase().includes(searchText) || item.email.toLowerCase().includes(searchText);
    });

  }
}
