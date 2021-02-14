import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  gerb1_kg:string='assets/gerb1_kg.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
