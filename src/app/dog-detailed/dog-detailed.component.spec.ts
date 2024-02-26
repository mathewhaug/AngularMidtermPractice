import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogDetailedComponent } from './dog-detailed.component';

describe('DogDetailedComponent', () => {
  let component: DogDetailedComponent;
  let fixture: ComponentFixture<DogDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
