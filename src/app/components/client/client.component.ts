import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CinchyService } from '../../Services/cinchy.service';
import { clients } from 'src/app/models/clients';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientForm: FormGroup;
  submitted = false;
  clients: clients[];
  client: string;
  firstName: string;
  lastName: string;
  companyName: string;
  position: string;
  description: string;
  annualSalary: string;
  birthday: string;
  favColor: string;
  hobby: string;
  datefield: Date;
  phone: number;

  constructor(private formBuilder: FormBuilder, private cinchyService: CinchyService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.cinchyService.getClients().subscribe(data => {

      this.clients = data;

    });
    this.clientForm = this.formBuilder.group({
      client: ['', Validators.required],
      firstName: [''],
      lastName: [''],
      birthday: [''],
      companyName: [''],
      position: [''],
      annualSalary: [''],
      description: [''],
      favColor: [''],
      hobby: ['', Validators.required],
      datefield: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(10)]]
    });

  }

  get f() {
    return this.clientForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    //return on errors
    if (this.clientForm.invalid) {
      return;
    }
    this.cinchyService.setClientDetails({
      client: this.client,
      firstName: this.firstName,
      lastName: this.lastName,
      birthday: this.birthday,
      companyName: this.companyName,
      position: this.position,
      annualSalary: this.annualSalary,
      description: this.description,
      favColor: this.favColor,
      hobby: this.hobby,
      datefield: this.datefield,
      phone: this.phone
    });
    this.navigateNext();
  }

  onChangeClient(e) {
    let selectedIndex = e.target.selectedIndex;
    this.client = this.clients[selectedIndex].id ? (this.clients[selectedIndex].id).toString() : "0";
    this.firstName = this.clients[selectedIndex].firstName;
    this.lastName = this.clients[selectedIndex].lastName;
    this.birthday = this.clients[selectedIndex].birthday;
    this.companyName = this.clients[selectedIndex].companyName;
    this.position = this.clients[selectedIndex].position;
    this.description = this.clients[selectedIndex].description;
    this.annualSalary = this.clients[selectedIndex].annualSalary + "$";
  }

  onChangeColor(e) {
    this.favColor = e.target.value;
  }

  navigateNext() {
    this.router.navigateByUrl('/appointment');
  }
}
