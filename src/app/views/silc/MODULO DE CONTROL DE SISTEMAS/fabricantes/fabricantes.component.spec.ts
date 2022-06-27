import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricantesComponent } from './fabricantes.component';

describe('FabricantesComponent', () => {
  let component: FabricantesComponent;
  let fixture: ComponentFixture<FabricantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
