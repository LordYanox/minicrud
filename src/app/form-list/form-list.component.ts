import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, throwToolbarMixedModesError } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Icommonresponse } from '../icommonresponse';
import { PersonaService } from '../persona.service';
import { Tabla } from '../tabla';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  datos:string;
  public myGroup : FormGroup;
  title = 'FORM';
  persona : Tabla[];
  constructor(public CloseDialog: MatDialogRef<FormListComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tabla, 
              private apiService : PersonaService ,
              public snack:     MatSnackBar ) { 
    this.myGroup = new FormGroup({ 
    id:     new FormControl((data.id  != undefined ) ? data.id : null),
    nombre: new FormControl((data.id  != undefined ) ? data.nombre : null ),
    cedula: new FormControl((data.id != undefined ) ? data.cedula : null ),
    ciudad: new FormControl((data.id != undefined ) ? data.ciudad : null )
  });
}

  ngOnInit() {
    console.log("DATOS" , this.data.ciudad);
  }
  enviar_datos(){
  const datos = this.myGroup.value;
   this.CloseDialog.close(datos);
  }
/*   guardarUsuario(){
    const newUser = {id: '32' , nombre: 'xxdddd', cedula:213112 , ciudad:'2'};
    this.apiService.addPersona(newUser).subscribe(data => this.persona.push(data));
} */
/*     let isNew = this.data.id;
    console.log( "estso" , datos); */
    
/*     this.apiService
   .Post(datos)
   .subscribe((Response: Icommonresponse)=>{
     if(Response.Status  == 'Success'){
       this.snack.open("Se realizo correctamente :)" , "OK",{duration: 5000});
     }else{
      this.snack.open("oh oh, algo anda mal :(" , "OK",{duration: 5000});
     }
   }) */
   


  BotonClose(){
  this.CloseDialog.close();
  }

}
