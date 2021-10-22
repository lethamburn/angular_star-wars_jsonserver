import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeComponent } from './components/home/home.component';
import "@lottiefiles/lottie-player";
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    [LottieModule.forRoot({ player: playerFactory })]
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule { }
