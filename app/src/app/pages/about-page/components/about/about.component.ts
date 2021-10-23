import { AboutInterface } from './../../models/about.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public about: AboutInterface = {
    title: "Star Wars Encyclopedia",
    content: "This website was made with Angular and JSON Server, inspired by Star Wars characters, locations and movies. It has been an example work for the students of the Full Stack Developer bootcamp at Upgrade Hub.",
    copyright: "This site is in no way affiliated with or endorsed by Lucasfilm Limited or any of its subsidiaries, employees, or associates. Wookieepedia offers no suggestion that the work presented on this web page is 'official' or produced or sanctioned by the owner or any licensees of the aforementioned trademarks.",
    socialMedia: [{
      icon: "../../../../../assets/icons/linkedin.png",
      link: "https://www.linkedin.com/in/antonio-rosales-martinez-925397213/",
      name: "Linkedin"
    },
    {
      icon: "../../../../../assets/icons/instagram.png",
      link: "https://instagram.com/lethamburn",
      name: "Instagram"
    },
    {
      icon: "../../../../../assets/icons/github.png",
      link: "https://github.com/lethamburn/",
      name: "GitHub"
    }
    ]

  }

  constructor() { }

  ngOnInit(): void {
  }

}
