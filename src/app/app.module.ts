import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { CardComponent } from './Components/card/card.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EventBookingComponent } from './Components/event-booking/event-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent } from './Components/events/events.component';
import { ForhelpComponent } from './Components/forhelp/forhelp.component';
import { Page404Component } from './shared/Components/page404/page404.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state';
import { EventEffect } from './state/event.effect';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchBarComponent,
    CardComponent,
    DashboardComponent,
    EventBookingComponent,
    EventsComponent,
    ForhelpComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([EventEffect]),
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
