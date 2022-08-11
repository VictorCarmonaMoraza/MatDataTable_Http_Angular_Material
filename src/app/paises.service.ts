import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from './country.interface';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  getPaises():Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}
