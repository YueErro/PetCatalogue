import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const PETS: Pet[] = [

];

interface FeathersResponse<T> {
  total: number,
  limit: number,
  skip: number,
  data: T[]
};

@Injectable()
export class PetService {

  private petUrl = 'http://localhost:3030/pets';

  constructor(
    private http: HttpClient
  ) { }

  getPets(): Promise<Pet[]> {
    return this.http.get<FeathersResponse<Pet>>(this.petUrl)
      .map(response => response.data)
      .toPromise();
  }

  getPet(id: number): Promise<Pet> {
    return this.http.get<Pet>(`${this.petUrl}/${id}`).toPromise();
  }

  addPet(pet: Pet): Promise<Pet> {
    return this.http.post<Pet>(this.petUrl, pet, httpOptions)
      .toPromise();
  }

  updatePet(id: number, pet: Pet): Promise<Pet> {
    return this.http.put<Pet>(`${this.petUrl}/${id}`, pet, httpOptions)
      .toPromise();
  }
}
