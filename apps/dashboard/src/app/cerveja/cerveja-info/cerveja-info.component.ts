import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CervejaFacade } from "@cerveja/core-state";
import { Cerveja } from "@cerveja/api-interfaces";

@Component({
  selector: 'cerveja-cerveja-info',
  templateUrl: './cerveja-info.component.html',
  styleUrls: ['./cerveja-info.component.scss']
})
export class CervejaInfoComponent {

  @Input() cerveja: Cerveja | null;


  constructor(
    private cervejaFacade: CervejaFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  navigateBack() {
    this.router.navigate(['/cervejas']);
  };

}
