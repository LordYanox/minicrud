import { Injectable, ViewChild } from '@angular/core';
import { Tabla } from './tabla';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const usuarios : Tabla[] = [
      {id: 1, nombre: 'Hydrogen', cedula: 10079, ciudad: 'Barranquilla'},
      {id: 2, nombre: 'Helium', cedula: 40026, ciudad: 'Bogota'},
      {id: 3, nombre: 'Lithium', cedula: 651941, ciudad: 'Medellin'}, 
      {id: 4, nombre: 'Beryllium', cedula: 911122, ciudad: 'Medellin'},
      {id: 5, nombre: 'Boron', cedula: 10811, ciudad: 'Bogota'},
      {id: 6, nombre: 'Carbon', cedula: 120107, ciudad: 'Barranquilla'},
      {id: 7, nombre: 'Nitrogen', cedula: 140067,ciudad: 'Medellin'},
      {id: 8, nombre: 'qweqwe', cedula: 455434, ciudad: 'Medellin'},
      {id: 9, nombre: 'asdass', cedula: 177751, ciudad: 'Barranquilla'},
      {id: 10, nombre: 'ccccc', cedula: 99651, ciudad: 'Bogota'},
      {id: 11, nombre: 'ggggg', cedula: 227781, ciudad: 'Medellin'},
      {id: 12, nombre: 'asddda', cedula: 96641, ciudad: 'Medellin'},
      {id: 13, nombre: 'hhhhh', cedula: 52210, ciudad: 'Bogota'},
      {id: 14, nombre: 'cccxx', cedula: 996501, ciudad: 'Medellin'},
      {id: 15, nombre: 'zzzzz', cedula: 554120, ciudad: 'Bogota'}
    ];
    return {usuarios};
  }

  genId(usuarios: Tabla[]): number {
      return usuarios.length > 0 ? Math.max(...usuarios.map(element => element.id)) + 1 : 1;
  } 


}
