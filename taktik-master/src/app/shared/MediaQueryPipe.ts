import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mediaQuery'
})
export class MediaQueryPipe implements PipeTransform {
  transform(query: string): boolean {
    return window.matchMedia(query).matches;
  }
}