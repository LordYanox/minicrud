import { Injectable } from '@angular/core';
import { Tabla } from './tabla';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const usuarios = [
      {id: '1', nombre: 'Hydrogen', cedula: 10079, ciudad: '1'},
      {id: '2', nombre: 'Helium', cedula: 40026, ciudad: '2'},
      {id: '3', nombre: 'Lithium', cedula: 651941, ciudad: '3'},
      {id: '4', nombre: 'Beryllium', cedula: 911122, ciudad: '3'},
      {id: '5', nombre: 'Boron', cedula: 10811, ciudad: '2'},
      {id: '6', nombre: 'Carbon', cedula: 120107, ciudad: '1'},
      {id: '7', nombre: 'Nitrogen', cedula: 140067,ciudad: '3'},
      {id: '8', nombre: 'Oxygen', cedula: 159994, ciudad: '3'},

    ];
    return {usuarios};
  }

/*   genId(ELEMENT_DATA: Tabla[]): number {
    return ELEMENT_DATA.length > 0 ? Math.max(...ELEMENT_DATA.map(persona => persona.id)) + 1 : 11;
  } */
  constructor() { }
}
