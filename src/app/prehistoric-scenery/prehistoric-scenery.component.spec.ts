import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrehistoricSceneryComponent } from './prehistoric-scenery.component';

describe('PrehistoricSceneryComponent', () => {
  let component: PrehistoricSceneryComponent;
  let fixture: ComponentFixture<PrehistoricSceneryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrehistoricSceneryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrehistoricSceneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
