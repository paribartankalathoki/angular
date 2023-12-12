import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TableExampleComponent } from './table-example/table-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    TableExampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
