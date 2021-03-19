import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Developer } from './developer';

// If you don't use injectable, then you have to provided 
// this service in the app.module.ts under providers[]
@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

  private apiServerUrl = environment.apiBaseUrl;

  /**
   * When we have the HttpClient, we can start make calls 
   * to Backend Service over the http-protocol
   * */
  constructor(private http: HttpClient) { }

  /**
   * Specifiy an interface type and don't use any for 
   * the Observable.
   * */
  public getDevelopers(): Observable<Developer[]> {
    return this.http.get<Developer[]>(`${this.apiServerUrl}/developers`); 
  }

  public addNewDeveloper(developer: Developer): Observable<Developer> {
    return this.http.post<Developer>(`${this.apiServerUrl}/add/developer`, developer);
  }

  public updateExistingDeveloper(developer: Developer): Observable<Developer> {
    return this.http.put<Developer>(`${this.apiServerUrl}/update/developer`, developer);
  }

  public getDeveloperByDeveloperId(developerId: number): Observable<Developer> {
    return this.http.get<Developer>(`${this.apiServerUrl}/developer/${developerId}`);
  }

  public deleteDeveloperById(developerId: number): Observable<Developer> {
    return this.http.delete<Developer>(`${this.apiServerUrl}/delete/developer/${developerId}`);
  }

}
