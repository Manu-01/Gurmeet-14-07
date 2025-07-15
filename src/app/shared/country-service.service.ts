import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryServiceService {
  private url = 'https://top100movies-5f84e.web.app/city/allcountries';

  constructor(private http: HttpClient) {}

  getCountry(): Observable<any> {
    return this.http.get(this.url);
  }

  getStatedata(countryCode: any): Observable<any> {
    return this.http.get(
      `https://top100movies-5f84e.web.app/city/states-by-countrycode?countrycode=${countryCode}`
    );
  }

  getCity(countryCode: any, StateCode: any): Observable<any> {
    return this.http.get(
      `https://top100movies-5f84e.web.app/city/cities-by-countrycode-and-statecode?countrycode=${countryCode}&statecode=${StateCode}`
    );
  }
}
