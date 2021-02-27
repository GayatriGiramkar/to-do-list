import { Pipe, PipeTransform } from '@angular/core';
import { List } from './server/list';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(List: List[], searchValue:any ): List[] {
    if(!List || !searchValue){
      return List;
    }
    return List.filter(list =>
      list.item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }
}
