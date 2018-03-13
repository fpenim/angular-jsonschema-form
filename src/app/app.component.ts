import {Component, OnInit} from '@angular/core';

import { SchemaService } from './services/schema.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SchemaService,
    HttpClient
  ],
})

export class AppComponent implements OnInit {
  title = 'JSON Schema Form';
  mySchema;
  myJsonFormLayout;

  constructor(
    private schemaService: SchemaService
  ) {

  }

  public ngOnInit() {

    this.schemaService.getSchema().subscribe(
      data => {
        this.mySchema = data;
      },
      err => {
        console.log(err);
      }
    );

    this.schemaService.getFormLayout().subscribe(
      data => {
        this.myJsonFormLayout = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
