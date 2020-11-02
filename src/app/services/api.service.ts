import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseLink = 'https://api.coincap.io/v2/assets?limit=20 '

  constructor(private http: HttpClient) { }

  getCoins() {
    return this.http.get(`${this.baseLink}`)
  }
}
