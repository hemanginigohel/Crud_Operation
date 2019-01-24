import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private httpclient:HttpClient) { }

  private url1:string='https://reqres.in/api/users?page=';
  
  getdata(page_number) : Observable<any>{
    return  this.httpclient.get(this.url1+page_number);
    }

    // deletedata(arrs):Observable<any>{
    //   return this.httpclient.delete(this.url1 + '/' + arrs.id);
    // }
    // putdata(record):Observable<any>{
    //   return this.httpclient.put(this.url1,{
    //     "first_name" : "hemangini" ,"last_name" : "gohel"
    //   });
    // }
}
