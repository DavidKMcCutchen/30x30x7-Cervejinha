import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cerveja } from "@cerveja/api-interfaces";

@Component({
  selector: 'cerveja-cerveja-list',
  templateUrl: './cerveja-list.component.html',
  styleUrls: ['./cerveja-list.component.scss']
})
export class CervejaListComponent {
  @Input() cervejas: Cerveja[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() cervejaViewed = new EventEmitter();
};
