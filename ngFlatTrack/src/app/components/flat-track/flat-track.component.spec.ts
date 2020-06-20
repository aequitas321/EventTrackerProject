import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatTrackComponent } from './flat-track.component';

describe('FlatTrackComponent', () => {
  let component: FlatTrackComponent;
  let fixture: ComponentFixture<FlatTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
