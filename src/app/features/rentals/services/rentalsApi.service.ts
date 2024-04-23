import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalListItemDto } from '../models/rental-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class RentalsApiService {

  constructor(private http: HttpClient) { }

  getList():Observable<RentalListItemDto[]>{
    return this.http.get<RentalListItemDto[]>('http://localhost:3000/rentals');
  }
}
