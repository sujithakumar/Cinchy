import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinchyService } from '../../Services/cinchy.service';
import { clients } from 'src/app/models/clients';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewForm: FormGroup;
  updateClientDetails: any;
  updateAppointmentDetails: any;
  submitted = false;
  clients: clients[];
  client: string;
  firstName: string;
  lastName: string;
  companyName: string;
  position: string;
  description: string;
  annualSalary: string;
  datefield: String
  birthday: String;
  aaptDate: string;
  hobby: string;
  type: string;
  allergyNotes: string;
  Comments: string;
  emergencyContactName: string;
  serviceFee: string;
  cost: number;
  phone: number;
  emergencyContactNo: number;


  constructor(private formBuilder: FormBuilder, private cinchyService: CinchyService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {

    this.reviewForm = this.formBuilder.group({
      client: [' '],
      firstName: [''],
      lastName: [''],
      birthday: [''],
      companyName: [''],
      position: [''],
      annualSalary: [''],
      description: [''],
      favColor: [''],
      hobby: [''],
      datefield: [''],
      phone: [''],
      aaptDate: [''],
      type: [''],
      emergencyContactName: [''],
      cost: [''],
      emergencyContactNo: [''],
      Comments: [''],
      allergyNotes: [''],
      serviceFee: [' ']
    });




    this.cinchyService.getClientDetails().subscribe(client => {
      this.updateClientDetails = client;
    });

    this.cinchyService.getAppointmentDetails().subscribe(appointment => {
      this.updateAppointmentDetails = appointment;
    });

    this.reviewForm.disable();
  }//init ends

  get f() {
    return this.reviewForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    //pass the values to localStorage
    this.cinchyService.setValuesInLocalStorage();
    this.router.navigateByUrl('/exit');
  }

  gotoClient() {
    if (confirm("you will loose the data entered if you go back.Press Ok to continue!")) {
      this.router.navigateByUrl('/');
    }
  }
  gotoAppointment() {
    if (confirm("you will loose the data entered if you go back.Press Ok to continue!")) {
      this.router.navigateByUrl('/appointment');
    }
  }

}

