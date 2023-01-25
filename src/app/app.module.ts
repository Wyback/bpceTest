import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './components/launch/launch.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, rootReducer } from './state/reducer';


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    LaunchListComponent,
    HeaderComponent,
    LaunchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      root: rootReducer
    }, {
      metaReducers: metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
