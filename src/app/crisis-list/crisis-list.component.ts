import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatTabLabel, MatTableDataSource } from '@angular/material';
import { MatPaginator} from '@angular/material';
import { SnotifyService } from 'ng-snotify';
import { element } from 'protractor';
import {MatTableModule} from '@angular/material/table';
import { from } from 'rxjs';
import { FormListComponent } from '../form-list/form-list.component';
import { PersonaService } from '../persona.service';
import { SpinnerService } from '../services/spinner.service';
import { Tabla } from '../tabla';



@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
  export class CrisisListComponent implements OnInit {
  title = 'TABLA';
  displayedColumns: string[] = ['id', 'nombre', 'cedula', 'ciudad', 'opciones'];
  filterPost = '';
  datos: Tabla[];
  pageActual: number = 1;
/*   dataSource = new MatTableDataSource<Tabla>(usuarios); */

/*   @ViewChild(MatPaginator, {static: true}) paginator:
  MatPaginator;
   */
  constructor(
    private apiService:PersonaService,
    public dialog: MatDialog,
    private spinnerService: SpinnerService,
    
    private snotifyService: SnotifyService
  ) {}

 

  ngOnInit() {
  /*   this.datos.paginator = this.paginator; */
    this.currrntDataPersona();
  }




  currrntDataPersona(){
    this.apiService.getPersonas().subscribe(data => (this.datos = data));  
  }
/*   onUpdatePerson(): void{
    const myPerson = ;
  
    this.apiService.updatePersona(myPerson).subscribe(data => {
      const indexToupdate = data
      ? this.datos.findIndex(d => d.id == data.id)
      : -1;
      if(indexToupdate > -1){
        this.datos[indexToupdate] = data;
      }
      console.log();
      
      this.currrntDataPersona();
    });
    
  } */

/*   onUpdateCity(): void {
    const myPerson = {id: '2', nombre: 'Helium', cedula:40026, ciudad:'2'};
    
    this.apiService.updatePersona(myPerson).subscribe(data => {
      const indexToupdate = data
      ? this.datos.findIndex(c => c.id == this.data.id)
      : -1;
      if(indexToupdate > -1) {
        this.datos[indexToupdate] = data;
      }
    })
  } */
/*   guardarUsuario(){
      const newUser = {id: '32' , nombre: 'xxdddd', cedula:213112 , ciudad:'2'};
      this.apiService.addPersona(newUser).subscribe(data => this.datos.push(data));
  } */
  openDialogAdd(): void {
    const dialogRef = this.dialog.open(FormListComponent, {
      width: '300px',
      data: {}
      
    });

    dialogRef.afterClosed().subscribe((result: Tabla)=>{
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


    dialogRef.afterClosed().subscribe((result: Tabla)=>{
/*       const myGroup = element;
        console.log(myGroup); */
        if(result){
          this.apiService.updatePersona(result).subscribe(data => this.datos.push(data));
          this.currrntDataPersona();
        }
        console.log('The dialog was closed');
      /* this.animal = result; */
    });

 /*    this.enviar_datos(); */
/*     this.onUpdatePerson();
    console.log(myPerson); */
/*     this.apiService.updatePersona(myPerson).subscribe(data => {
      const indexToupdate = data
      ? this.datos.findIndex(d => d.id == data.id)
      : -1;
      if(indexToupdate > -1){
        this.datos[indexToupdate] = data;
      }
      this.currrntDataPersona();
      });
 */

/*     const myGroup = element;
    this.apiService.updatePersona().subscribe(data => {
      const indexToupdate = data 
      ? this.datos.findIndex( c => c.id == data.id)
      : -1;
      if(indexToupdate > -1) {
        this.datos[indexToupdate] = data;
        this.currrntDataPersona();
      }
    }); */
    
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
    this.currrntDataPersona();
  }

}
