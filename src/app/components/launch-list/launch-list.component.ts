import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Launch } from 'src/app/models/launch.model';
import { PropertiesService } from 'src/app/services/properties.service';
import { LaunchListState } from 'src/app/store/app.interface';
import * as fromActions from '../../store/actions/actions-launchs'

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {

  myLaunchList!: Launch[]
  // readonly myLaunchList$ = this.store.select('launchs').pipe(map((launchs) => launchs))
  constructor(readonly propertiesService: PropertiesService, readonly store: Store<LaunchListState>) {}

  ngOnInit() {
    this.propertiesService.getAllLaunch().subscribe(res => {
      this.myLaunchList = res.results
      // sort launch list to most recent window_start
      this.myLaunchList = this.myLaunchList.sort((a,b)=> Date.parse(b.window_start) - Date.parse(a.window_start));
      this.store.dispatch(fromActions.loadLaunchListSuccess({ launchs: res.results }))
    })
  }

}
