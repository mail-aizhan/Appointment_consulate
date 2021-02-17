import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

appForm:FormGroup;
purposeSelectOptions= ['Registration of a birth certificate', 'Notarial acts', 'And other services', 'Registration of a birth certificate', 'Registration of a general civil passport', 'Registration of a birth certificate'];
  submissionForm: any;

constructor(private fb:FormBuilder) { }


submitData(value:any){
 // this.appointmentForm.value
 console.log(value);
 this.submissionForm.add(value).then(res =>{
   console.log("Data added");

 }).catch(err => console.log(err))
}


  ngOnInit(): void {
    this.appForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      passId:['', Validators.required],
      phoneNumber:['', Validators.required],
      emailAddress:['', Validators.required, Validators.email],
      hireDate:['', Validators.required],
      chooseTime:['', Validators.required],
      purpose: ['', Validators.required]
    })
  }
  
  ngAfterViewInit(){
    this.appForm.valueChanges.subscribe((formValue)=> {
      console.log("form value", formValue)
    })
  }
}