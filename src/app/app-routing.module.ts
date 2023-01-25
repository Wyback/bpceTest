import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';

const routes: Routes = [
  { path: '', component: LaunchListComponent },
  { path: 'launchdetailed', component: LaunchDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
