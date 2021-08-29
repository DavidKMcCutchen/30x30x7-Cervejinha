import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CervejaDetailsComponent } from './cerveja-details.component';

describe('CervejaDetailsComponent', () => {
  let component: CervejaDetailsComponent;
  let fixture: ComponentFixture<CervejaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CervejaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CervejaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
