import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

 constructor(private appareilService: AppareilService) {
 }
 ngOnInit() {
   this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
     (appareils: any[]) => {
      this.appareils = appareils;
     }
   );
  this.appareilService.emitAppareilSubjet();
 }
 onAllumer() {
   this.appareilService.switchOnAll();
 }
 onEteindre() {
   this.appareilService.switchOffall();
 }

}
