import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth-components/signup/signup.component';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EyeOutline, EyeInvisibleOutline } from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { LoginComponent } from './auth-components/login/login.component';
import { SignupUserComponent } from './auth-components/signup-user/signup-user.component';
import { SignupAdminComponent } from './auth-components/signup-admin/signup-admin.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SignupUserComponent,
    SignupAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzSpinModule,
    NzSpinModule,
    NzIconModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: [EyeOutline, EyeInvisibleOutline] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
