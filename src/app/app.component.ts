import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Promise, promised, reject } from 'q';
import { resolve } from 'dns';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 lastUpdate = Promise (
   (resolve, reject) => {
     const date = new Date();
  setTimeout(() => {
    resolve(date);
  }, 2000);
       }
 );

 isAuth = false;
 appareils: any[];
 constructor(private appareilService: AppareilService) {
   setTimeout(() => {this.isAuth = true;
       }, 4000);
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
