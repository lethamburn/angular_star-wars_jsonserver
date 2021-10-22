import { HomeInterface } from './../../models/home.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public home: HomeInterface = {
    title: "../../../../../assets/images/logo.png",
    content: "Long time ago in a galaxy far, far away...",
    lottie: "../../../../../assets/lottie/falcon.json"
  }


  constructor() { }

  ngOnInit(): void {
  }

}
