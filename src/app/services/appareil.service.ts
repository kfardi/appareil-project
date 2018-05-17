export class AppareilService {
    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Télévsion',
          status: 'allumé'
        },
        {
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];

      switchOnAll() {
            // tslint:disable-next-line:prefer-const
            for (let appareil of this.appareils) {
                 appareil.status = 'allumé';

            }
      }
      switchOffall() {
          // tslint:disable-next-line:prefer-const
          for (let appareil of this.appareils ) {
              appareil.status = 'éteint';
          }
      }

      switchOnOne (index: number) {
        this.appareils[index].status = 'allumé';
      }

      switchOffOne (index: number) {
        this.appareils[index].status = 'éteint';
      }
}
