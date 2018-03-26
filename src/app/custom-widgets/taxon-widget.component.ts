
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { JsonSchemaFormService } from 'angular2-json-schema-form';
  
@Component({
  selector: 'taxon-widget',
  templateUrl: './taxon-widget.component.html'
})
export class TaxonWidgetComponent implements OnInit {
  formControl: AbstractControl;
  controlName: string;
  controlValue: string;
  controlDisabled = false;
  options: any;
  autoCompleteList: string[] = [];
  @Input() layoutNode: any;
  @Input() layoutIndex: number[];
  @Input() dataIndex: number[];

  constructor(private jsf: JsonSchemaFormService) {}

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    console.log(this.layoutNode);
    this.jsf.initializeControl(this);
  }

  updateValue(event) {
    this.jsf.updateValue(this, event.target.value);
  }

  onChanges(data: any) {
    console.log(data);
  }
}