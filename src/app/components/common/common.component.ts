import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  @Input() xRay:any;
  @Input() inbox_list:any
  constructor() { }
  indexList:any=[]
  ngOnInit(): void {
    this.indexList=this.xRay.inbox_list;
    console.log(this.indexList)
    console.log("common",this.xRay)
  }

}
