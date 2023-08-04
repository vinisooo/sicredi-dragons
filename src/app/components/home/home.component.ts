import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../services/dragons.service';
import { IDragon } from './card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dragons: IDragon[] = [];

  constructor(private dragonsService: DragonsService) {}

  ngOnInit() {
    this.dragonsService.getDragons().subscribe((data: IDragon[]) => {
      this.dragons = data;
    });
  }
}
