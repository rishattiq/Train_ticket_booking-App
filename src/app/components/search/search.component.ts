import { Component , inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iTrain, Search } from '../../model/train';
import { APIService } from '../../service/api.service';
import { FormsModule } from '@angular/forms';
import {train} from '../../../app/model/train'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  activatedRoute = inject(ActivatedRoute);
  search_data: Search = new Search();
  service=inject(APIService)
  train_details: train[] = []; 
  TrainList: iTrain[]=[];


  constructor(){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.search_data=res;
      this.getsearch();
      this.getAll()
    })
  }

  getsearch() {
    this.service.searchData(this.search_data.fromstationId).subscribe((res: any) => {
      console.log('API Response:', res); // Log the response to check its structure
      this.TrainList = res;
      console.log('TrainList:', this.TrainList);
      console.log(this.search_data.fromstationId)
      

    });
  }
  
  
  getAll(){
    this.service.getAllData().subscribe((res:any)=>{
      this.train_details = res;
    
    })
  }


}

