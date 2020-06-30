import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProspectListComponent } from './client-prospect-list.component';

describe('ClientProspectListComponent', () => {
  let component: ClientProspectListComponent;
  let fixture: ComponentFixture<ClientProspectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProspectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProspectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
