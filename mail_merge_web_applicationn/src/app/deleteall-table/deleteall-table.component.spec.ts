import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteallTableComponent } from './deleteall-table.component';

describe('DeleteallTableComponent', () => {
  let component: DeleteallTableComponent;
  let fixture: ComponentFixture<DeleteallTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteallTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
