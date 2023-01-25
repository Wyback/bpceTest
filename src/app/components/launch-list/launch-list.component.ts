import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PropertiesService } from 'src/app/services/properties.service';
import { LaunchListState } from 'src/app/state/reducer';
import * as fromActions from '../../state/actions'

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {
  myLaunchList!: any

  constructor(private propertiesService: PropertiesService, private store: Store<LaunchListState>) {}

  async ngOnInit() {
    this.propertiesService.getAllLaunch().subscribe(res => {
      this.myLaunchList = res.results
      console.log(this.myLaunchList)
      this.store.dispatch(fromActions.loadLaunchListSuccess({ launchs: this.myLaunchList }))
    })
  }

}
