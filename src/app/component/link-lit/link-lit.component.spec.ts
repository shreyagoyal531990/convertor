import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LinkLitComponent } from './link-lit.component';

describe('LinkLitComponent', () => {
  let component: LinkLitComponent;
  let fixture: ComponentFixture<LinkLitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkLitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LinkLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
