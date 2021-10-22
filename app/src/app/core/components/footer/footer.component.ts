import { Component, OnInit, Input } from '@angular/core';
import { FooterInterface } from '../../models/footer.navigator';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footer!: FooterInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
