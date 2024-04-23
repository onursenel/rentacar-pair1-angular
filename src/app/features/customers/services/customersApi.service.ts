import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerListItemDto } from '../models/customer-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export class CustomersApiService {

  constructor(private http: HttpClient) { }

  getList():Observable<CustomerListItemDto[]>{
    return this.http.get<CustomerListItemDto[]>('http://localhost:3000/customers');
  }
}
