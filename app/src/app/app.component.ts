import { FooterInterface } from './core/models/footer.navigator';
import { Component } from '@angular/core';
import { NavigatorInterface } from './core/models/navigator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'app';
  public navigator: NavigatorInterface[] = [
    {
      name: "home",
      link: "/home"
    },
    {
      name: "characters",
      link: "/characters"
    },
    {
      name: "movies",
      link: "/movies"
    },
    {
      name: "about",
      link: "/about"
    },
  ];
  public footer: FooterInterface = {
    creator: "Antonio Rosales",
    from: "Upgrade Hub"
  }
}
