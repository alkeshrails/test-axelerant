import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EventBookingComponent } from './Components/event-booking/event-booking.component';
import { EventsComponent } from './Components/events/events.component';
import { ForhelpComponent } from './Components/forhelp/forhelp.component';
import { Page404Component } from './shared/Components/page404/page404.component';

const routes: Routes = [
	{
		path: "",
		// loadChildren: () =>
		// 	import("./module/dashboard-layout/dashboard-layout.module").then((m) => m.DashboardLayoutModule),
    component:DashboardComponent
	},
  {
    path:"events",
    component:EventsComponent
  },
  {
    path:"help",
    component:ForhelpComponent
  },
  {
    path:"booking",
    component:EventBookingComponent
  },
  {
    path:"**",
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
