import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api // definimos la variable privada URL y vemos que hace un import debe ser el de desarrollo.
  constructor(private httpClient: HttpClient) {  
  }

  //este metod es el devuelbe todas las canciones.
  // estas viene como {data [1..2..3..4..]}
  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({data}: any) => {
        return data
      })
    ) // ojo aqui se usa comilla invertida que permite concatenar
  }

  // retorna canciones random
  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${ this.URL}/tracks`).pipe( // ahora maneja errores como 'tracks001'
      map(({data}: any) => {
        return data.reverse()
      }), catchError((err) => {
        alert('Error de conexion')
        const {status, statusText} = err
        console.log('Algo paso revisar', [status, statusText])
        return of([])
      })
    )
  }
}