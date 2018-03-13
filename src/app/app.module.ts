import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  JsonSchemaFormModule, Bootstrap4FrameworkModule
} from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Bootstrap4FrameworkModule,
    JsonSchemaFormModule.forRoot(Bootstrap4FrameworkModule)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
