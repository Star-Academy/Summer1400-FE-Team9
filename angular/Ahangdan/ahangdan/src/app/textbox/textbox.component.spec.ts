import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TextboxComponent } from './textbox.component';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set value', () => {
    component.value = "new-value";
    expect(component.innerValue).toEqual("new-value");

    component.value = "";
    expect(component.innerValue).toEqual("");
  })

  it('should set value if html element has changed', () => {
    const value = 'test';
    (fixture.debugElement.nativeElement.query(By.css('input')) as HTMLInputElement).value = value;
    expect(component.value).toEqual(value);
  })
});
