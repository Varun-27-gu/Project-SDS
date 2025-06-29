import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './admin-components/dashboard/dashboard.component';
import { AddCategoryComponent } from './admin-components/add-category/add-category.component';
import { DemoNgZorroAntdModule } from 'src/app/DemoNgZorroAntdModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { PostProductComponent } from './admin-components/post-product/post-product.component';
import { ViewProductsComponent } from './admin-components/view-products/view-products.component';
import { UpdateProductComponent } from './admin-components/update-product/update-product.component';
import { GetReservationsComponent } from './admin-components/get-reservations/get-reservations.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddCategoryComponent,
    PostProductComponent,
    ViewProductsComponent,
    UpdateProductComponent,
    GetReservationsComponent
  ],
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    AdminRoutingModule,
    FormsModule,
    NzSpinModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
