import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NewSurveyComponent } from './new-survey.component';

describe('NewSurveyComponent', () => {
  let component: NewSurveyComponent;
  let fixture: ComponentFixture<NewSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ NgbModule.forRoot() ],
      declarations: [ NewSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
