import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }



  getsubjects(model: any) {
    return this.http.post('http://localhost:3000/' + 'subjects', model)
  }

  ubdatesubjects(model: any, id: number) {
    return this.http.put('http://localhost:3000/' + 'subjects' + id, model)
  }

}
