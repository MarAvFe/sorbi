import { Question } from './question'

export class Survey {
    constructor(name: string, description: string, questions: Question[]) {
        this.name = name
        this.description = description;
        this.questions = questions
    }
    name: string
    description: string
    questions: Question[]
}
