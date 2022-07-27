import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Root2 } from '../posts'
import { User } from '../interface/user.interface';
import { Response } from '../interface/response.interface';
import { Users } from '../interface/users.interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'https://randomuser.me/api';
  private url: string = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {
  }
  getUsers(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map(res => this.processResponse(res)));
  }
  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?results=${id}`).pipe(
      map(res => this.processResponse(res)));
    ;
  }
  getUserEx(): Observable<Users> {
    return this.http.get<Users>('http://localhost:3000/users');
  }
  // deleteUser(id:string): Observable<any> {
  getInfoUser(id: string): Observable<Users> {
    return this.http.get<Users>(`http://localhost:3000/users/${id}`);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/users/${id}`)
  }
  addUser(value: any): Observable<Users> {
    return this.http.post<Users>('http://localhost:3000/users', value);
  }
  updateUser(id: string, value: any): Observable<Users> {
    return this.http.patch<Users>(`http://localhost:3000/users/${id}`, value);
  }
  // }
  private processResponse(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map((user: any) => (<User>{
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: 'nam dinh',
        phone: user.phone,
        imageUrl: user.picture.medium,
        // coordinate: {
        //   latitude: +user.locattion.coordinates.latitude, logitude: +user.locattion.coordinates.logitude
        // }
      }))
    }
  }
}
