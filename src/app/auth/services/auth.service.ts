import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  user = new Subject()

  createuser(model: any) {
    return this.http.post('http://localhost:3000/students', model)
  }

  login(model: any) { return this.http.put('http://localhost:3000/' + 'login/1', model) }


  getuser(type: string) {
    return this.http.get('http://localhost:3000/' + type)

  }
  getrole() {
    return this.http.get('http://localhost:3000/' + 'login/1')

  }



}
