import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarDirective } from './sidebar.directive';
import { ClientComponent } from './components/client/client.component';
import { ReviewComponent } from './components/review/review.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ExitPageComponent } from './components/exit-page/exit-page.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarDirective,
    ClientComponent,
    ReviewComponent,
    AppointmentComponent,
    ExitPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
