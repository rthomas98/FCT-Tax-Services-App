import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeTaxPreparationPage } from './income-tax-preparation.page';

describe('IncomeTaxPreparationPage', () => {
  let component: IncomeTaxPreparationPage;
  let fixture: ComponentFixture<IncomeTaxPreparationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeTaxPreparationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeTaxPreparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
