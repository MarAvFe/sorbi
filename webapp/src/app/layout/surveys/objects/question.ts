import { QuestionAnswer } from './question-answer'

export class Question {
    constructor(title: string, type: string, answers: QuestionAnswer[]) {
        this.title = title
        this.type = type;
        this.answers = answers
    }
    title: string
    type: string
    answers: QuestionAnswer[]
}
