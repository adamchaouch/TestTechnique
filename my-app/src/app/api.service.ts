import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
  * url de mock service  
  */ 
  private SERVER_URL = "http://localhost:3000/person";

  constructor(private httpClient: HttpClient) { }
/**
  * la méthode get se connecte  avec mock server
  */ 
  public get(){
    return this.httpClient.get<any>(this.SERVER_URL);
  }
  
}
