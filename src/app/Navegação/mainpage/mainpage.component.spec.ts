import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpageComponent } from './mainpage.component';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display the correct title', () => {
    const compiled = fixture.nativeElement;
    const titleElement = compiled.querySelector('h1');
    expect(titleElement.textContent).toContain('Main Page');
  });

  it('should update the message when button is clicked', () => {
    const compiled = fixture.nativeElement;
    const buttonElement = compiled.querySelector('button');
    const messageElement = compiled.querySelector('.message');

    buttonElement.click();
    fixture.detectChanges();

    expect(messageElement.textContent).toBe('Button Clicked');
  });

  });

