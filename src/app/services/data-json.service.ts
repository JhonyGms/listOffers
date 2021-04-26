import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {


  constructor(
    private http: HttpClient
  ) { }

  listOfferts() {
    return this.http.get<any>("/assets/ofertas.json");
  } 
}
