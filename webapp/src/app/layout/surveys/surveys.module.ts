import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { SurveysRoutingModule } from './surveys-routing.module';
import { SurveysComponent } from './surveys.component';
import { NewSurveyComponent } from './new-survey/new-survey.component';
import { ResultsComponent } from './results/results.component';
import { DetailsComponent } from './details/details.component';
import { XlsxUploaderComponent } from '../components/xlsx-uploader/xlsx-uploader.component';
import { FileUploadModule } from "ng2-file-upload";
import { PageHeaderModule } from '../../shared';

@NgModule({
  imports: [
      CommonModule,
      SurveysRoutingModule,
      Ng2Charts,
      PageHeaderModule,
      NgbModule.forRoot(),
      FileUploadModule,
  ],
  declarations: [
      SurveysComponent,
      NewSurveyComponent,
      ResultsComponent,
      DetailsComponent,
      XlsxUploaderComponent,
  ]
})
export class SurveysModule { }
