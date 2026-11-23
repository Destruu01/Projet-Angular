import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Profile } from './Components/profile/profile';
import { Friends } from './Components/friends/friends';
import { Navbar } from './Components/navbar/navbar';
import { Notifications } from './Components/notifications/notifications';
import { Footer } from './Components/footer/footer';
import { ConferenceList } from './Components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Profile, Friends, Navbar, Notifications, Footer, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('plateformeConf');
}
