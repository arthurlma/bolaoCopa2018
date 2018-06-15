import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpitesMataMataComponent } from './palpites-mata-mata.component';

describe('PalpitesMataMataComponent', () => {
  let component: PalpitesMataMataComponent;
  let fixture: ComponentFixture<PalpitesMataMataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalpitesMataMataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalpitesMataMataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
