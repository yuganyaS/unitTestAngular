import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../environments/environment';

const api = "../app-api.ts";
 @Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  FetchJSON(PathOfUrl){
    const url = this.baseUrl + PathOfUrl;
    return this.http.get(url);
  }
}
