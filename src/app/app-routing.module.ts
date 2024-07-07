import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./events/events.component";
import {EventDetailsComponent} from "./event-details/event-details.component";
import {EventPayementComponent} from "./event-payement/event-payement.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {
    path: '/en/paris',
    component: EventsComponent
  },
  {
    path: '/:event-id/en',
    component: EventDetailsComponent
  },
  {
    path: 'purchase/:purchase-number/:id',
    component: EventPayementComponent
  },
  {
    path: 'profile/info',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
