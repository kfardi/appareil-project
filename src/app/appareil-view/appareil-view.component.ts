import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Promise} from 'q';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  lastUpdate = Promise (
   (resolve, reject) => {
     const date = new Date();
  setTimeout(() => {
    resolve(date);
  }, 2000);
       }
 );

  appareils: any[];
 constructor(private appareilService: AppareilService) {
 }
 ngOnInit() {
  this.appareils = this.appareilService.appareils;
 }
 onAllumer() {
   this.appareilService.switchOnAll();
 }
 onEteindre() {
   this.appareilService.switchOffall();
 }

}
