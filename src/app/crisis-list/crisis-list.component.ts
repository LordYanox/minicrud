import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatTabLabel } from '@angular/material';

import { SnotifyService } from 'ng-snotify';
import { from } from 'rxjs';
import { FormListComponent } from '../form-list/form-list.component';
import { PersonaService } from '../persona.service';
import { Tabla } from '../tabla';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
  export class CrisisListComponent implements OnInit {
  

  title = 'TABLA';
  displayedColumns: string[] = ['id', 'nombre', 'cedula', 'ciudad', 'opciones'];
  
  datos: Tabla[];
  constructor(
    private apiService:PersonaService,
    public dialog: MatDialog,
    private snotifyService: SnotifyService
  ) {}

  ngOnInit() {
    this.currrntDataPersona();
  }

  currrntDataPersona(){
    this.apiService.getPersonas().subscribe(data => (this.datos = data));  
  }


/*   guardarUsuario(){
      const newUser = {id: '32' , nombre: 'xxdddd', cedula:213112 , ciudad:'2'};
      this.apiService.addPersona(newUser).subscribe(data => this.datos.push(data));
  } */
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(FormListComponent, {
      width: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result: Tabla )=>{
      if(result){
        this.apiService.addPersona(result).subscribe(data => this.datos.push(data));
        this.currrntDataPersona();
      }
      console.log('The dialog was closed');
      /* this.animal = result; */
    });
    
  }
  openDialogEdit(element:Tabla): void {
    const dialogRef = this.dialog.open(FormListComponent, {
      width: '300px',
       data: element 
    });
  }
  openDialogDelete(element:Tabla): void{
    this.snotifyService.confirm("Estas seguro que desea borrar este usuario?" , "Eliminar usuario", {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      buttons: [{
        text: 'Yes',
        action: () => {
          console.log("Se elimino");
          const myPerson = element;
          this.apiService.deletePersona(myPerson.id).subscribe();
          this.datos = this.datos.filter(c => c.id != myPerson.id);
          this.snotifyService.remove();

        }
      },{
        text: 'No',
        action: () => this.snotifyService.remove()
      }]
    });
  }
}
