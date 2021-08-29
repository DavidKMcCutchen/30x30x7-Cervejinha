import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaInfoComponent } from './cerveja-info.component';

describe('CervejaInfoComponent', () => {
  let component: CervejaInfoComponent;
  let fixture: ComponentFixture<CervejaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervejaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
