import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // API URLs
  getUrl = "https://dummyjson.com/products";
  postUrl = "https://dummyjson.com/users/add";

  constructor(private http: HttpClient) {}

  // ✅ GET data (for user list)
  getUser() {
    return this.http.get<any>(this.getUrl);
  }

  // ✅ POST data (add user)
  saveUser(data: any) {
    return this.http.post<any>(this.postUrl, data);
  }
}