import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PartListDTO } from '../models/dto/part-list-dto';
import { PartDetailDTO } from '../models/dto/part-detail-dto';

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
}

@Injectable({
  providedIn: 'root'
})

export class PartService {

  private baseUrl = 'http://localhost:8080'; 
  
  constructor(private http: HttpClient) {}

  getAllParts(params: any): Observable<Page<PartListDTO>> {
    return this.http.get<Page<PartListDTO>>(`${this.baseUrl}/parts`, { params }).pipe(
      map((page: Page<PartListDTO>) => ({
        ...page,
        content: page.content.map(part => ({
          id: part.id,
          subGroup: part.subGroup,
          imgUrl: part.imgUrl
        }))
      }))
    );
  }  

  getPartById(id: number): Observable<PartDetailDTO> {
    return this.http.get<PartDetailDTO>(`${this.baseUrl}/parts/${id}`);    
  }

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
