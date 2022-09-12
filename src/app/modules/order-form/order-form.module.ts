import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';

import { AddessComponent } from './components/addess/addess.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { OrderFormRoutingModule } from './order-form-routing.module';
import { OrderFormComponent } from './order-form.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    OrderFormComponent,
    PersonalInformationComponent,
    AddessComponent,
  ],
  imports: [
    ButtonModule,
    CommonModule,
    DropdownModule,
    OrderFormRoutingModule,
    FormsModule,
    InputNumberModule,
    InputMaskModule,
    InputTextModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class OrderFormModule { }
