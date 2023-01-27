import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';

const routes: Routes = [
  { path: '', component: LaunchListComponent },
  { path: 'launchdetailed', component: LaunchDetailComponent },
  { path: 'error', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
