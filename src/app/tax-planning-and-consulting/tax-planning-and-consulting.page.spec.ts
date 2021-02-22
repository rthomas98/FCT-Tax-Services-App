import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaxPlanningAndConsultingPage } from './tax-planning-and-consulting.page';

describe('TaxPlanningAndConsultingPage', () => {
  let component: TaxPlanningAndConsultingPage;
  let fixture: ComponentFixture<TaxPlanningAndConsultingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxPlanningAndConsultingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaxPlanningAndConsultingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
