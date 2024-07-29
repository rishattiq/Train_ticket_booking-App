import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {APIService} from '../../../app/service/api.service'
import {train} from '../../../app/model/train'
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomeComponent implements OnInit {

  service = inject(APIService)
  router= inject(Router)
  train_details: train[] = []; 
  fromid: string = "";
  toid: number = 0;
  date: string='';


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

  Onsearch(){
    if(this.fromid==" " || this.toid==0 || this.date==""){
      alert("Please fill all the fields")
    }

    else{
    
      this.router.navigate(['/search',this.fromid])
      }
    }
  }


