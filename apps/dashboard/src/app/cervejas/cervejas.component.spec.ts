import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejasComponent } from './cervejas.component';

describe('CervejasComponent', () => {
  let component: CervejasComponent;
  let fixture: ComponentFixture<CervejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervejasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
