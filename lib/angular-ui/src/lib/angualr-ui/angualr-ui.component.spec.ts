import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngualrUiComponent } from './angualr-ui.component';

describe('AngualrUiComponent', () => {
  let component: AngualrUiComponent;
  let fixture: ComponentFixture<AngualrUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngualrUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngualrUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
