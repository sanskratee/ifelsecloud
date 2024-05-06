import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  showFiller = false;
  @Input() holeData:any

  
  constructor(
    // public commonService:CommonService
  ) {
    // this.commonService.commonApi().subscribe((data)=>{
    //   this.holeData=data;
    //   console.log(this.holeData)
    // })
   }

  ngOnInit(): void {
  }

}
