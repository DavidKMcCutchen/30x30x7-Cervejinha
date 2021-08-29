import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CervejaFacade } from '@cerveja/core-state';


@Component({
  selector: 'cerveja-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.scss']
})
export class CervejaComponent implements OnInit {

  currentCerveja$ = this.cervejaFacade.selectedCervejas$


  constructor(
    private cervejaFacade: CervejaFacade,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const cervejaId = this.route.snapshot.params.id;
    this.loadCerveja(cervejaId);
  }

  loadCerveja(cervejaId: string) {
    this.cervejaFacade.selectCerveja(cervejaId);
    this.cervejaFacade.loadCerveja(cervejaId);
  }

  navigateBack() {
    this.router.navigate(['/cervejas']);
  };

}
