import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './customer-components/dashboard/dashboard.component';
import { DemoNgZorroAntdModule } from 'src/app/DemoNgZorroAntdModule'; // Ensure this contains all needed ng-zorro modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewProductsByCategoryComponent } from './customer-components/view-products-by-category/view-products-by-category.component';
import { PostReservationComponent } from './customer-components/post-reservation/post-reservation.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { GetAllReservationsComponent } from './customer-components/get-all-reservations/get-all-reservations.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewProductsByCategoryComponent,
    PostReservationComponent,
    GetAllReservationsComponent 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    DemoNgZorroAntdModule,
    NzDatePickerModule,
    NzSpinModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CustomerModule { }
