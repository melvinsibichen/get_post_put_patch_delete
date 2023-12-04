import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../posts';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  httpclient: any;

  constructor(private http: HttpClient) { }

  getUserDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postDetails(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, userData);
  }

 
  deleteUser(userId: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }

  put(opost: Posts): Observable<any> {
    return this.http.put("https://jsonplaceholder.typicode.com/posts/1", opost);
  }
  
 



}
