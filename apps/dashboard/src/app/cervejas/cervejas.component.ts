import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cerveja, emptyCerveja } from "@cerveja/api-interfaces";
import { CervejaFacade } from '@cerveja/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'cerveja-cervejas',
  templateUrl: './cervejas.component.html',
  styleUrls: ['./cervejas.component.scss']
})
export class CervejasComponent implements OnInit {
  allCervejas$: Observable<Cerveja[]> = this.cervejaFacade.allCervejas$;
  selectedCerveja$: Observable<Cerveja> = this.cervejaFacade.selectedCervejas$;

  form: FormGroup;

  constructor(
    private cervejaFacade: CervejaFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.cervejaFacade.mutations$.subscribe((_) => this.resetCerveja());
  }

  ngOnInit() {
    this.initForm();
    this.cervejaFacade.loadCervejas();
    this.resetCerveja()

    const cervejaRouteId = this.route.snapshot.params['id'];

    if (cervejaRouteId) {
      this.loadCerveja((cervejaRouteId))
    }
  }

  viewCerveja(cervejaId: string) {
    this.router.navigate(["cervejas", cervejaId])
  }

  loadCerveja(cervejaId: string) {
    this.cervejaFacade.selectCerveja(cervejaId);
    this.cervejaFacade.loadCerveja(cervejaId);
  }

  selectCerveja(cerveja: Cerveja) {
    this.cervejaFacade.selectCerveja(cerveja.id)
    this.form.patchValue(cerveja);
  }

  saveCerveja(cerveja: Cerveja) {
    this.cervejaFacade.saveCerveja(cerveja);
  }

  deleteCerveja(cerveja: Cerveja) {
    this.cervejaFacade.deleteCerveja(cerveja);
  }

  resetCerveja() {
    this.form.reset();
    this.selectCerveja(emptyCerveja)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      brewery: [''],
      style: [''],
      abv: [''],
      import: ['']
    })
  }
}
