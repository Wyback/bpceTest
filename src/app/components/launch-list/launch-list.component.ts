import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Launch } from 'src/app/models/launch.model';
import { PropertiesService } from 'src/app/services/properties.service';
import { LaunchListState } from 'src/app/store/app.interface';
import * as fromActions from '../../store/actions/actions-launchs'

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit, OnDestroy {

  myLaunchList!: Launch[]
  private destroy$ = new Subject<boolean>()
  constructor(readonly propertiesService: PropertiesService, readonly store: Store<LaunchListState>) {}

  ngOnInit() {
    this.propertiesService.getAllLaunch().pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.myLaunchList = res.results
      this.store.dispatch(fromActions.loadLaunchListSuccess({ launchs: res.results }))
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
