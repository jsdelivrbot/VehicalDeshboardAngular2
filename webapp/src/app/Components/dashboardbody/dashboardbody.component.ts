import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboardbody',
  templateUrl: './dashboardbody.component.html',
  styleUrls: ['./dashboardbody.component.css']
})
export class DashboardbodyComponent {

    private vehicles: any;

    constructor(private http:Http){
       this.http.get('./assets/vehicleData.json')
      .map((response:Response) => response.json())
      .subscribe(response => this.vehicles = response.vehicle);
    }
    doSomething() {
        alert ('inline');
    }
}