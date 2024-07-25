import { Component , inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iTrain, Search } from '../../model/train';
import { APIService } from '../../service/api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  activatedRoute = inject(ActivatedRoute);
  search_data: Search = new Search();
  service=inject(APIService)
  TrainList: iTrain[]=[];


  constructor(){
    this.activatedRoute.params.subscribe((res:any)=>{
      this.search_data=res;
      this.getsearch();
    })
  }

  getsearch(){
    this.service.searchData(this.search_data.fromstationId,this.search_data.tostationId).subscribe((res:any)=>{
      console.log(res)
    })
  }

}

