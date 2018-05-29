import { Subject } from 'rxjs/Subject';

export class AppareilService {
  appareilSubject = new Subject <any[]>();
  private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Télévsion',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];


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
}
