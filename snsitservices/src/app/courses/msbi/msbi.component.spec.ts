import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsbiComponent } from './msbi.component';

describe('MsbiComponent', () => {
  let component: MsbiComponent;
  let fixture: ComponentFixture<MsbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
