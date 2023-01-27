import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AppReducer, reducerLaunch } from "../store/reducers/reducer-launchs";
import { LaunchDetailComponent } from "./launch-detail/launch-detail.component";
import { LaunchListComponent } from "./launch-list/launch-list.component";
import { LaunchComponent } from "./launch/launch.component";

const launchRoutes: Routes = [{ path: "", component: LaunchListComponent}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(launchRoutes),
        StoreModule.forFeature("launchs", AppReducer)
    ],
    declarations: [
        LaunchComponent,
        LaunchListComponent,
        LaunchDetailComponent
    ]
})
export class LaunchModule {} 