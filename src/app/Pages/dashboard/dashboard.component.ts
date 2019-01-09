import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/Services/dashboard.service';
import * as api from  "../../app-api";
var Api = api.Api;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public SummaryData=[];

  constructor(public dashboard : DashboardService) { }

  ngOnInit() {
    this.dashboard.FetchJSON(Api.summary).subscribe(data=>{
      console.log("dat",data["data"]);
      this.SummaryData = [];
      this.SummaryData.push(data["data"]);
    })
  }

}
