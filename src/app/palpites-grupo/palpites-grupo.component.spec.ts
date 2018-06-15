import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpitesGrupoComponent } from './palpites-grupo.component';

describe('PalpitesGrupoComponent', () => {
  let component: PalpitesGrupoComponent;
  let fixture: ComponentFixture<PalpitesGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalpitesGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalpitesGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
