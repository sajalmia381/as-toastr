import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsToastrComponent } from './as-toastr.component';

describe('AsToastrComponent', () => {
  let component: AsToastrComponent;
  let fixture: ComponentFixture<AsToastrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsToastrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
