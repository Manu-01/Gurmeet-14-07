import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardThemeComponent } from './dashboard-theme.component';

describe('DashboardThemeComponent', () => {
  let component: DashboardThemeComponent;
  let fixture: ComponentFixture<DashboardThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardThemeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
