import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (!value) {
      return value;
    }

    return Math.floor(value / 60) ? `${Math.floor(value / 60)}h ${value % 60}min` : `${value % 60}min`;
  }

}
