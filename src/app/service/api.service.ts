import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) 
  {

  }

  getAllData()
  {
    return this.http.get('https://freetestapi.com/api/v1/airlines')
  }

  searchData(from:number,to:number){
    return this.http.get(`https://freetestapi.com/api/v1/airlines?search=${from},${to}`)
  }

}
