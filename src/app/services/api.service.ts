import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coins } from '../interfaces/coins.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseLink = 'https://api.coincap.io/v2/assets?limit=20 ';

  constructor(private http: HttpClient) { }

  getCoins(): Observable<Coins> {
    return this.http.get<Coins>(`${this.baseLink}`);
  }
}
