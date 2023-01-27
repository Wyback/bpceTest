import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Launch } from '../models/launch.model';
import { map, Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  launchsList: Launch[] = []

  constructor(private http: HttpClient) { }

  getAllLaunch(): Observable<any>{
    return this.http.get(API_URL + 'launch')
  }
}
