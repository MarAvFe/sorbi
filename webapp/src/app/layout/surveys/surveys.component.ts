import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Survey } from './objects/survey'
import { Question } from './objects/question'
import { QuestionAnswer } from './objects/question-answer'

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss'],
  animations: [routerTransition()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveysComponent implements OnInit {

    answers1: QuestionAnswer[] = [
        new QuestionAnswer("Si", 40),
        new QuestionAnswer("No", 60),
    ]

    answers2: QuestionAnswer[] = [
        new QuestionAnswer("Chifrijo", 40),
        new QuestionAnswer("Vigorón", 10),
        new QuestionAnswer("Pinto", 50),
    ]

    answers3: QuestionAnswer[] = [
        new QuestionAnswer("Lucía", 0),
        new QuestionAnswer("Carmen", 0),
        new QuestionAnswer("Miguel", 0),
    ]

    questions1: Question[] = [
        new Question("Conoce la fuente de la hispanidad?", "UNIC", this.answers1 ),
        new Question("Qué come el viernes en la noche?", "MULT", this.answers2 ),
        new Question("Cuál es su nombre?", "BREV", this.answers3 ),
    ]

    surveys: Survey[] = [
        new Survey( "Encuesta 1", "Descripción de la encuesta 1", this.questions1 ),
        new Survey( "Encuesta 2", "Descripción de la encuesta 2", [] ),
        new Survey( "Encuesta 3", "Descripción de la encuesta 3", [] ),
    ]

    slcIdx = this.surveys.length > 0 ? 0 : -1

    constructor() {}

    ngOnInit() {
    }

    surveyChanged(num){
        this.slcIdx = num;
    }

    oneLess(){
        this.surveys = [
            new Survey( "Encuesta 1", "Descripción de la encuesta 1", [] ),
            new Survey( "Encuesta 3", "Descripción de la encuesta 3", [] ),
        ]
    }

}
