import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (!value) {
      return '';
    }
    const birthDate = new Date(value);
    const now = new Date();

    return (now.getFullYear() - birthDate.getFullYear()).toString();
  }

}
