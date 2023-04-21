import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtextComponent } from './specialtext.component';

describe('SpecialtextComponent', () => {
  let component: SpecialtextComponent;
  let fixture: ComponentFixture<SpecialtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialtextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
