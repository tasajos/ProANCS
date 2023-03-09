import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IULOGINComponent } from './iulogin.component';

describe('IULOGINComponent', () => {
  let component: IULOGINComponent;
  let fixture: ComponentFixture<IULOGINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IULOGINComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IULOGINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
