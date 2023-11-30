import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from 'src/app/config/constantes.config';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(imagePath: string): string {
    if (!imagePath.trim()) {
      return CONSTANTES.defaultImage;
    }
    return imagePath;
   // return imagePath.trim() || CONSTANTES.defaultImage;
  }

}
