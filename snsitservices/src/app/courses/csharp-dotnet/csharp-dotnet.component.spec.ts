import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpDotnetComponent } from './csharp-dotnet.component';

describe('CsharpDotnetComponent', () => {
  let component: CsharpDotnetComponent;
  let fixture: ComponentFixture<CsharpDotnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsharpDotnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsharpDotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
