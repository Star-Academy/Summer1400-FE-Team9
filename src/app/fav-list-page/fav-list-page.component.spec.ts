import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavListPageComponent } from './fav-list-page.component';

describe('FavListPageComponent', () => {
  let component: FavListPageComponent;
  let fixture: ComponentFixture<FavListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
