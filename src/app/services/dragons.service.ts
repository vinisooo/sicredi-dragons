import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IDragon } from '../components/home/card.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {
  constructor(private httpClient: HttpClient) { }

  getDragons(): Observable<IDragon[]> {
    return this.httpClient.get<IDragon[]>("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon");
  }
}
