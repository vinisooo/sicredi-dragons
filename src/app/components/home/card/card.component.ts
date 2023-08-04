import { Component, Input } from '@angular/core';
import { IDragon } from '../card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  dragon!: IDragon;
}
