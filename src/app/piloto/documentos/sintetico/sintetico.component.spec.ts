import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinteticoComponent } from './sintetico.component';

describe('SinteticoComponent', () => {
  let component: SinteticoComponent;
  let fixture: ComponentFixture<SinteticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinteticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinteticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
