import { Component, OnInit } from '@angular/core';
import { CinchyService } from '../../Services/cinchy.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exit-page',
  templateUrl: './exit-page.component.html',
  styleUrls: ['./exit-page.component.css']
})
export class ExitPageComponent implements OnInit {

  ClientDetails: any;
  AppointmentDetails: any;
  isdataCleared: boolean;

  constructor(private CinchyService: CinchyService, private route: ActivatedRoute, private router: Router) {
    this.isdataCleared = false;
    setInterval(() => { }, 1000);
  }

  ngOnInit(): void {

    if (localStorage.getItem('ClientDetails')) {
      this.ClientDetails = JSON.parse(localStorage.getItem('ClientDetails'));
    }
    if (localStorage.getItem('AppointmentDetails')) {
      this.AppointmentDetails = JSON.parse(localStorage.getItem('AppointmentDetails'));
    }
  }

  resetStoredData() {
    this.CinchyService.resetStoredData();
    window.location.reload();
    this.isdataCleared = true;
  }


  // setInterval(function() {
  //   this.counter--
  //   if (counter === 0) {
  //     console.log("HAPPY NEW YEAR!!");
  //   }
  // }, 1000);

}
