import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {APIService} from '../../../app/service/api.service'
import {train} from '../../../app/model/train'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomeComponent implements OnInit {

  service = inject(APIService)
  train_details: train[] = []; 

  constructor(){
    
  }

  ngOnInit(){
    this.getAll();

  }

  getAll(){
    this.service.getAllData().subscribe((res:any)=>{
      this.train_details = res;
      
    
    })
  }

}
