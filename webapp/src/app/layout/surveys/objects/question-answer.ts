export class QuestionAnswer {
    constructor(title: string, percentage: number) {
        this.title = title
        this.percentage = percentage;
    }
    title: string
    percentage: number
}

/*{
    name: "Encuesta 1",
    description: "Modelo de datos para encuestas",
    questions: [
        {
            title: "Conoce usted la fuente de la hispanidad?",
            type: "seleccion única",
            answers: [
                {
                    title: "Si",
                    percentage: 40
                },
                {
                    title: "No",
                    percentage: 60
                }
            ]
        },
        {
            title: "Qué come para ver el mundial?",
            type: "seleccion múltiple",
            answers: [
                {
                    title: "Chifrijo",
                    percentage: 40
                },
                {
                    title: "Vigorón",
                    percentage: 10
                },
                {
                    title: "Pinto",
                    percentage: 50
                }
            ]
        },
        {
            title: "Cuál es su nombre?",
            type: "respuesta corta",
            answers: [
                "Michael",
                "Ruben",
                "Andrea"
            ]
        }
    ]
}*/
