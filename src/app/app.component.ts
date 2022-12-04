import { Component, inject, OnInit,  } from '@angular/core';
import { RickandmortyService } from './rickandmorty/rickandmorty.service';
import { rickyAPIResponse,Result} from './rickandmorty/interfaces/rickyandmorty.interface'
import { AsyncPipe, NgFor, NgIf,NgStyle} from '@angular/common';
import { PersonajeCardComponent } from './rickandmorty/card/personaje-card.component';
import { FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[NgFor,NgStyle,PersonajeCardComponent,ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  characters: Result[] =[]
  currentPage:number=1  
  numPages:number=0;
 
  baseUrl:string | null ='https://rickandmortyapi.com/api/character?page=1'
  title = 'rickandmorty2';
  rickyandmoryService=inject(RickandmortyService)

  inputSearch = new FormControl('');

  ngOnInit(): void {

    this.getAll('')
   this.inputSearch.valueChanges.pipe(
    map((search:string | null)=>search?.trim()),
    debounceTime(350),
    distinctUntilChanged(),
   ).subscribe(data=>{
    this.getAll(data)
   })

    
  }
  getAll(search:string | undefined=''){
    this.rickyandmoryService.getAll(this.currentPage, search).subscribe(data=>{
    
      this.characters=data.results
      this.numPages=data.info.pages
      console.log(this.characters)
    })
  }
changePage(siguiente:boolean){
if(siguiente){
  this.currentPage++;
}else {
  this.currentPage--;
}
this.getAll()
}
}
