import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, map, Observable } from 'rxjs';
import { Employee, EmployeeDTO, MessageResponse } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private urlEndPoint: string = 'http://localhost:9191/rest/api/employee';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
 
  constructor(private http: HttpClient) { }
 
 getAllEmployees(): Observable<Employee[]> {
  return this.http.get<MessageResponse>(this.urlEndPoint).pipe(
    map(response => response.objectResponse[0] as unknown as Employee[]));  
  }

 

 
  getEmployee(id:number): Observable<any>{
    return this.http.get<any>(`${this.urlEndPoint}/${id}`);
  }
 
  saveEmployee(employeeDTO: EmployeeDTO): Observable<any>{
    return this.http.post<any>(this.urlEndPoint, employeeDTO);  
  }
 
  deleteEmployee(id: number): Observable<any>{
   return this.http.delete<any>(`${this.urlEndPoint}/${id}`);
 }
 
 
 updateEmployee(id: number,employee: EmployeeDTO): Observable<any>{
   return this.http.put<any>(`${this.urlEndPoint}/${id}`, employee);  
 }
 
}
