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
    /* copyright: "This site is in no way affiliated with or endorsed by Lucasfilm Limited or any of its subsidiaries, employees, or associates. Wookieepedia offers no suggestion that the work presented on this web page is 'official' or produced or sanctioned by the owner or any licensees of the aforementioned trademarks.", */
    creator: "Antonio Rosales",
    from: "Upgrade Hub"
  }
}
