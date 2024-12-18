import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartListComponent } from './part-list.component';

describe('PartListComponent', () => {
  let component: PartListComponent;
  let fixture: ComponentFixture<PartListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
