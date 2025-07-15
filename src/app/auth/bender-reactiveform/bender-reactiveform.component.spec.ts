import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenderReactiveformComponent } from './bender-reactiveform.component';

describe('BenderReactiveformComponent', () => {
  let component: BenderReactiveformComponent;
  let fixture: ComponentFixture<BenderReactiveformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BenderReactiveformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BenderReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
