import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Launch} from 'src/app/models/launch.model';
import { PropertiesService } from 'src/app/services/properties.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent {

  @Input() launch!: Launch

  launchList!: Launch[]

  constructor(readonly propertiesService: PropertiesService, readonly router: Router) { }
}
