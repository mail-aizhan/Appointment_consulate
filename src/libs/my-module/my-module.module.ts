import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { MyModuleRoutingModule } from './my-module-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentServiceService } from './service/appointment-service.service';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCard, MatCardModule} from '@angular/material/card';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule}  from  '@angular/material/select';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
@NgModule({
  declarations: [MainContainerComponent, AppointmentFormComponent],
  imports: [
    CommonModule,
    MyModuleRoutingModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    NgxMaterialTimepickerModule
    
   
  ],
  providers:[
    AppointmentServiceService
  ]
})
export class MyModuleModule { }
