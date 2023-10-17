import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MiddleAgeSceneryComponent } from './middle-age-scenery.component';

describe('MiddleAgeSceneryComponent', () => {
  let component: MiddleAgeSceneryComponent;
  let fixture: ComponentFixture<MiddleAgeSceneryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleAgeSceneryComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MiddleAgeSceneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
