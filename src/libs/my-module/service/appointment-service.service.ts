import { Injectable } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor() { }

  form: FormGroup = new FormGroup(
    {
      $key: new FormControl(null),
      Name: new FormControl(''),
      surName: new FormControl(''),
      passId: new FormControl(''),
      phoneNumber: new FormControl(''),
      emailAddrress: new FormControl(''),
      appDate: new FormControl(''),
    hireDate: new FormControl(''),
      purposeApp: new FormControl(0),
    }
  )
}
