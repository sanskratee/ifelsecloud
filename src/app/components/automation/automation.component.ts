import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.css']
})
export class AutomationComponent implements OnInit {
  @Input() myAutomation:any
  constructor() { }

  ngOnInit(): void {
  }

}
