import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Subject, takeUntil } from 'rxjs';
import { Pad } from 'src/app/models/pad.model';
import { Program } from 'src/app/models/program.model';
import { Rocket } from 'src/app/models/rocket.model';
import { LaunchListState } from 'src/app/store/app.interface';
import { launchSelector } from 'src/app/store/selectors/selector-launchs';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {

  launchId!: string
  private launch$ = this.store.pipe(select(launchSelector))
  private launchs!: any
  pad!: Pad
  rocket!: Rocket
  program!: Program
  name!: string

  private destroy$ = new Subject()

  constructor(private readonly route: ActivatedRoute, private readonly store: Store<LaunchListState>, private readonly router: Router) {
  }

  ngOnInit() {

    this.route.queryParams.pipe(takeUntil(this.destroy$)).subscribe(params => {
      this.launchId = params['id']
    })
    this.launch$.pipe(takeUntil(this.destroy$))
            .subscribe((launchs) => {
              this.launchs = launchs
              if(this.launchs.launchs == null){
                this.router.navigateByUrl('error');
              }else {
                this.launchs = this.launchs.launchs.filter((launch: { id: string; }) => {
                  return launch.id == this.launchId
                })
              }
            });
        this.pad = this.launchs[0].pad
        this.rocket = this.launchs[0].rocket
        this.program = this.launchs[0].program
        this.name = this.launchs[0].name
  }

}
