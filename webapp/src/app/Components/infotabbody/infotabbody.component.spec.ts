import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotabbodyComponent } from './infotabbody.component';

describe('InfotabbodyComponent', () => {
  let component: InfotabbodyComponent;
  let fixture: ComponentFixture<InfotabbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfotabbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfotabbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
