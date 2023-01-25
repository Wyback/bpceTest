import { Component, Input, OnInit } from '@angular/core';
import { Rocket } from 'src/app/models/rocket.model';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent {

  private launch!: string
  rocket!: Rocket
  pad!: any
  agencies!: any


  constructor() {
  }
}
