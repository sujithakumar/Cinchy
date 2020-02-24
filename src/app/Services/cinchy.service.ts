import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { clients } from '../models/clients';



@Injectable({
  providedIn: 'root'
})
export class CinchyService {


  public clientDetails = new BehaviorSubject<any>({
    client: "",
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    companyName: "",
    position: "",
    annualSalary: "",
    description: "",
    favColor: "",
    hobby: "",
    datefield: "",
    phone: ""
  });

  public appointmentDetails = new BehaviorSubject<any>({
    aaptDate: "",
    type: "",
    emergencyContactName: "",
    cost: "",
    emergencyContactNo: "",
    Comments: "",
    allergyNotes: "",
    serviceFee: ""
  });


  constructor(private http: HttpClient) {
  }


  public getClients(): Observable<any> {
    return this.http.get<clients[]>("./assets/clients.json");
  }


  setClientDetails(clientDetails: any) {
    this.clientDetails.next(clientDetails);
  }

  getClientDetails() {
    return this.clientDetails.asObservable();
  }

  setAppointmentDetails(appointmentDetails: any) {
    this.appointmentDetails.next(appointmentDetails);
  }

  getAppointmentDetails() {
    return this.appointmentDetails.asObservable();
  }

  setValuesInLocalStorage() {
    localStorage.setItem('ClientDetails', JSON.stringify(this.clientDetails.value));
    localStorage.setItem('AppointmentDetails', JSON.stringify(this.appointmentDetails.value));
  }

  resetStoredData() {
    localStorage.clear();

  }
}
