import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getUrl = "https://dummyjson.com/products";
  postUrl = "https://dummyjson.com/users/add";

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<any>(this.getUrl);
  }

  saveUser(data: any) {
    return this.http.post(this.postUrl, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`https://dummyjson.com/products/${id}`);
  }

  updateUser(id: number, data: any) {
    return this.http.put(`https://dummyjson.com/users/${id}`, data);
  }
}