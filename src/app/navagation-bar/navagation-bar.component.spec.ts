import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavagationBarComponent } from './navagation-bar.component';

describe('NavagationBarComponent', () => {
  let component: NavagationBarComponent;
  let fixture: ComponentFixture<NavagationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavagationBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavagationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
