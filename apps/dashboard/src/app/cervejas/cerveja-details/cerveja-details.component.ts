import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Cerveja } from "@cerveja/api-interfaces";

@Component({
  selector: 'cerveja-cerveja-details',
  templateUrl: './cerveja-details.component.html',
  styleUrls: ['./cerveja-details.component.scss']
})
export class CervejaDetailsComponent {
  currentCerveja: Cerveja;
  originalTitle: string;


  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set cerveja(value) {
    if (value) this.originalTitle = value.name;
    this.currentCerveja = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
