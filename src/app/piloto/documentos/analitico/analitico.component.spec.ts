import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaliticoComponent } from './analitico.component';

describe('AnaliticoComponent', () => {
  let component: AnaliticoComponent;
  let fixture: ComponentFixture<AnaliticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaliticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaliticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
