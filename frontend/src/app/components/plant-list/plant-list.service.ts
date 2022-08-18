import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantListService {

  constructor(private httpClient: HttpClient) { }

  getPlants() {
    return this.httpClient.get('http://localhost:4100/plants');
  }
}
