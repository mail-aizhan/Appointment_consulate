import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
 visiting= new FormControl();
 visitingList: string[] = ['Registration of a birth certificate', 'Notarial acts', 'And other services', 'Registration of a birth certificate', 'Registration of a general civil passport', 'Registration of a birth certificate'];

  constructor(private formBuilder:FormBuilder) { }
appointmentForm= this.formBuilder.group({
  firstName:[''],
  lastName:[''],
  passId:[''],
  phoneNumber:[],
  emailAddress:[''],
  hireDate:[''],
  chooseTime:[''],
  
});

submitForm(){
 // this.appointmentForm.value
 console.log("form data is ", this.appointmentForm.value)
}


  ngOnInit(): void {
  }
  
}
