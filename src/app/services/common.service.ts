import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  commonApi(){
    let url="https://fy24et02.ifelsecloud.workers.dev";
    return this.http.get<any>(url);
  }
}
