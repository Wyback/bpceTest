import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Launch } from '../models/launch.model';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  launchsList: Launch[] = []

  constructor(private http: HttpClient) { }

  getAllLaunch(): Observable<any>{
    return this.http.get('https://ll.thespacedevs.com/2.2.0/launch/')
  }
}
