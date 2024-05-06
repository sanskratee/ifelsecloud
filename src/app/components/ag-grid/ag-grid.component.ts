import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {
  @Input() rowData:any
  columnDefs = [
    { headerName: 'ID', field: 'id'},
    { headerName: 'Name', field: 'name' },
    { headerName: 'Leads From', field: 'leads_from' },
    { headerName: 'Status', field: 'status' },
    { headerName: 'Audience Name', field: 'audience_name' }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
