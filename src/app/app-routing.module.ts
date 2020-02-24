import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ReviewComponent } from './components/review/review.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ExitPageComponent } from './components/exit-page/exit-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'exit',
    component: ExitPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
