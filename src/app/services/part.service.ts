import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  private baseUrl = 'http://localhost:8080'; 
  constructor(private http: HttpClient) {}
  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/groups`);
  }
  getSubGroups(groupId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/groups/${groupId}/subgroups`);
  }
  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/brands`);
  }
  getModels(brandId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/brands/${brandId}/models`);
  }
  getManufacturers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/manufacturers`);
  }
}
