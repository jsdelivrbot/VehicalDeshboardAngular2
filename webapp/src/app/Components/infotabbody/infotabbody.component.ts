import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';

@Component({
  selector: 'app-infotabbody',
  templateUrl: './infotabbody.component.html',
  styleUrls: ['./infotabbody.component.css']
})
export class InfotabbodyComponent {

  private vehicles: any;

    constructor(private http:Http,iconRegistry: MdIconRegistry, sanitizer: DomSanitizer){
       this.http.get('./assets/vehicleData.json')
      .map((response:Response) => response.json())
      .subscribe(response => this.vehicles = response.vehicle);

      this.setIcon(iconRegistry,sanitizer);

    }

    setIcon(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer){
      iconRegistry.addSvgIcon(
        'my-car',
        sanitizer.bypassSecurityTrustResourceUrl('./assets/aminiremastered.jpg'));
    }

}
