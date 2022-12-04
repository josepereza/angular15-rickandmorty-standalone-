import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rickyAPIResponse } from './interfaces/rickyandmorty.interface';
@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

apiUrl:string='https://rickandmortyapi.com/api/character'
  constructor(private http:HttpClient) { }

  getAll(page:number,search:string){
  return  this.http.get<rickyAPIResponse>(`${this.apiUrl}?page=${page}&name=${search}`)
  }
}
