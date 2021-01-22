import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Tabla } from './tabla';
import { catchError, map, tap } from 'rxjs/operators';
import { Icommonresponse } from './icommonresponse';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
private urlAPI = 'api/usuarios';
 
constructor(private http: HttpClient) { }

    getPersonas(): Observable<Tabla[]> {
      return this.http.get<Tabla[]>(this.urlAPI);
    }
    addPersona(persona: Tabla): Observable<Tabla> {
      return this.http.post<Tabla>(this.urlAPI, persona);
    }
    updatePersona(persona: Tabla):Observable<Tabla> {
      return this.http.put<Tabla>(this.urlAPI, persona);
    }
    deletePersona(id: number): Observable<{}>{
      this.urlAPI = `${this.urlAPI}/${id}`;
      return this.http.delete(this.urlAPI);
    }
/*     public Post(route: string, ob: any = {}, ELEMENT_DATAUrl = ''): Observable<Icommonresponse>{
      let serverUrl = ELEMENT_DATAUrl.trim() == '' ? this.ELEMENT_DATAUrl  : ELEMENT_DATAUrl;
      return this.http.post<Icommonresponse>(serverUrl, ob);
   } */

}
