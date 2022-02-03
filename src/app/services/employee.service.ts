import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.urlBackend+'/employee/getEmployees');
  }

  public getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>('/employee/getEmployeeById?id=' +  id);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(environment.urlBackend+'/employee/addEmployee', employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.urlBackend+'/employee/updateEmployee', employee);
  }

  public deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(environment.urlBackend+'/employee/deleteEmployee?id' + id);
  }
}
