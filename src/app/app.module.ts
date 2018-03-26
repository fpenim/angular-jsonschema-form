import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CustomWidgetsModule } from './custom-widgets/custom-widgets.module';

import {
  JsonSchemaFormModule, Bootstrap4FrameworkModule, JsonSchemaFormService
} from 'angular2-json-schema-form';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JsonSchemaFormModule.forRoot(),
    CustomWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
