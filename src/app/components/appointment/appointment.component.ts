import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinchyService } from '../../Services/cinchy.service';
import { clients } from 'src/app/models/clients';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  appointmentForm: FormGroup;
  submitted = false;
  clients: clients[];
  aaptDate: Date;
  type: string;
  allergyNotes: string;
  Comments: string;
  emergencyContactName: string;
  serviceFee: string;
  cost: number;
  emergencyContactNo: number;

  serviceFees = {
    "Type A": "500$",
    "Type B": "1000$",
    "Type C": "1500$"
  };

  constructor(private formBuilder: FormBuilder, private cinchyService: CinchyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.cinchyService.getClients().subscribe(data => {

      this.clients = data;

    });

    this.appointmentForm = this.formBuilder.group({

      aaptDate: ['', Validators.required],
      type: ['', Validators.required],
      emergencyContactName: ['', Validators.required],
      cost: ['', Validators.required],
      emergencyContactNo: ['', [Validators.required, Validators.maxLength(10)]],
      Comments: [''],
      allergyNotes: [''],
      serviceFee: [' ']
    });

  }

  get f() {
    return this.appointmentForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    //return on errors
    if (this.appointmentForm.invalid) {
      return;
    }
    this.cinchyService.setAppointmentDetails({
      aaptDate: this.aaptDate,
      type: this.type,
      emergencyContactName: this.emergencyContactName,
      cost: this.cost,
      emergencyContactNo: this.emergencyContactNo,
      Comments: this.Comments,
      allergyNotes: this.allergyNotes,
      serviceFee: this.serviceFee
    });
    this.navigateNext();
  }


  onChangeType(e) {
    var value = e.target.value;
    this.type = value;
    this.serviceFee = this.serviceFees[value];

  }

  alertMessage() {

    if (confirm("you will loose the data entered if you go back.Press Ok to continue!")) {
      this.router.navigateByUrl('/');
    }

  }
  navigateNext() {
    this.router.navigateByUrl('/review');
  }
}
