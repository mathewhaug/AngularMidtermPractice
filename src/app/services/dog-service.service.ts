import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CONTENT } from '../data/mock-content';
import { DogInfo } from '../models/dog-info';

@Injectable({
  providedIn: 'root'
})
export class DogServiceService {

  constructor() { }

  getContent(): Observable<DogInfo[]>{
    return of(CONTENT);
  }

  //Get item bt ID in array
  getContentByName(dogName: string): Observable<DogInfo[]> {
    return of(CONTENT.filter(content => content.dogName === dogName));
  }
}
