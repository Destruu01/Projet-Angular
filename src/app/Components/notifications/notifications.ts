import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications=signal([
    {name: 'El Moulehi a perdu sa pierre favorite'},
    {name: 'Samoud a été trompé par sa femme'},
    {name: 'Mayssem a soulevé un poids de 2.5 kg sans tomber dans les pommes'}
  ]);

  show=signal(false);
  bntTXT='Afficher les notifications';
  ShowNotifications(){
    this.show.set(!this.show());
  }
}
