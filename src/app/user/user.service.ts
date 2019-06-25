import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { User } from "./models/user.model";


@Injectable({
  providedIn: "root"
})
export class UserService {
  private customersUrl = "http://localhost:51178/api";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.customersUrl+'/Users');
  }

  getUserById(payload: number): Observable<User> {
    return this.http.get<User>(`${this.customersUrl}/${payload}`);
  }
  Login(payload: User): Observable<User> {
      debugger;
    return this.http.post<User>(this.customersUrl+'/Users/Login_Users?username='+payload.username+'&password='+payload.userpass,'');
  }
  createUser(payload: User): Observable<User[]> {
    return this.http.post<User[]>(this.customersUrl+"/Users", payload);
  }

  updateCustomer(customer: User): Observable<User> {
    return this.http.patch<User>(
      `${this.customersUrl}/${customer.userid}`,
      customer
    );
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
