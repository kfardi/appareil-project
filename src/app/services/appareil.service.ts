import { Subject } from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'util';

@Injectable()
export class AppareilService {
  appareilSubject = new Subject <any[]>();
  private appareils = [];

      constructor(private httpClient: HttpClient) {

      }

      emitAppareilSubjet() {
        this.appareilSubject.next(this.appareils.slice());
      }
      getAppareilById(id: number) {
        const appareil = this.appareils.find(
                (appareilObject) => {
                  return appareilObject.id === id;
                }
        );
        return appareil;
      }
      switchOnAll() {
            // tslint:disable-next-line:prefer-const
            for (let appareil of this.appareils) {
                 appareil.status = 'allumé';

            }
            this.emitAppareilSubjet();
      }
      switchOffall() {
          // tslint:disable-next-line:prefer-const
          for (let appareil of this.appareils ) {
              appareil.status = 'éteint';
          }
          this.emitAppareilSubjet();
      }

      switchOnOne (index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubjet();
      }

      switchOffOne (index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubjet();
      }
      addAppareil(name: string, status: string) {
        const appareilObject = {
          id: 0,
          name: '',
          status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length) - 1].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubjet();
      }

      saveAppareilToServer() {
        this.httpClient.put('https://http-client-demo-723ab.firebaseio.com/appareils.json', this.appareils)
        .subscribe(
          () => {console.log('Enregistrement terminé');
        },
        (error) =>  {
          console.log('Erreur de sauvegarde' + error);
        }
        );
      }

      getAppareilFromServer() {
        this.httpClient.get<any[]>('https://http-client-demo-723ab.firebaseio.com/appareils.json')
        .subscribe(
          (reponse) => {
             this.appareils = reponse;
             this.emitAppareilSubjet();
          },
          (error) => {
            console.log('Erreur de chargement' + error);
          }
        );
      }

}
