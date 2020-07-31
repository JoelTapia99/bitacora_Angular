import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesPersonalizadosComponent } from './pipes-personalizados.component';

describe('PipesPersonalizadosComponent', () => {
  let component: PipesPersonalizadosComponent;
  let fixture: ComponentFixture<PipesPersonalizadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesPersonalizadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
