import { Component } from '@angular/core';

import { UploadResult } from '../../components/xlsx-uploader/xlsx-uploader.component';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-new-survey',
    templateUrl: './new-survey.component.html',
    styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent {
    isCollapsed = true;

    uploaderContent: BehaviorSubject<string> = new BehaviorSubject('Por favor arrastre un archivo');

    xlsxUploaded(result: UploadResult) {

        this.uploaderContent.next(result.result == "success" ? "Éxito" : "Error. Intente de nuevo.");
        console.log(`result: ${JSON.stringify(result,null,"  ")}`);
    }

    parseXslx(file: UploadResult){

    }
}

/*
result: {
  "result": "success",
  "payload": [
    {
      "!ref": "A1:I4",
      "A1": {
        "t": "s",
        "v": "Marca temporal",
        "r": "<t xml:space=\"preserve\">Marca temporal</t>",
        "h": "Marca temporal",
        "w": "Marca temporal"
      },
      "B1": {
        "t": "s",
        "v": "Nombre",
        "r": "<t xml:space=\"preserve\">Nombre</t>",
        "h": "Nombre",
        "w": "Nombre"
      },
      "C1": {
        "t": "s",
        "v": "Celular",
        "r": "<t xml:space=\"preserve\">Celular</t>",
        "h": "Celular",
        "w": "Celular"
      },
      "D1": {
        "t": "s",
        "v": "Marque la opción que delimite sus gastos mensuales en colones como estudiante",
        "r": "<t xml:space=\"preserve\">Marque la opciÃ³n que delimite sus gastos mensuales en colones como estudiante</t>",
        "h": "Marque la opción que delimite sus gastos mensuales en colones como estudiante",
        "w": "Marque la opción que delimite sus gastos mensuales en colones como estudiante"
      },
      "E1": {
        "t": "s",
        "v": "¿Cree usted que los profesores demuestran favoritismo sobre algún conjunto de estudiantes? ¿Por qué?",
        "r": "<t xml:space=\"preserve\">Â¿Cree usted que los profesores demuestran favoritismo sobre algÃºn conjunto de estudiantes? Â¿Por quÃ©?</t>",
        "h": "¿Cree usted que los profesores demuestran favoritismo sobre algún conjunto de estudiantes? ¿Por qué?",
        "w": "¿Cree usted que los profesores demuestran favoritismo sobre algún conjunto de estudiantes? ¿Por qué?"
      },
      "F1": {
        "t": "s",
        "v": "¿Es usted estudiante activo del ITCR?",
        "r": "<t xml:space=\"preserve\">Â¿Es usted estudiante activo del ITCR?</t>",
        "h": "¿Es usted estudiante activo del ITCR?",
        "w": "¿Es usted estudiante activo del ITCR?"
      },
      "G1": {
        "t": "s",
        "v": "¿Considera usted que el plan de estudio IC410 tiene alguna falla?",
        "r": "<t xml:space=\"preserve\">Â¿Considera usted que el plan de estudio IC410 tiene alguna falla?</t>",
        "h": "¿Considera usted que el plan de estudio IC410 tiene alguna falla?",
        "w": "¿Considera usted que el plan de estudio IC410 tiene alguna falla?"
      },
      "H1": {
        "t": "s",
        "v": "Marque los cursos que haya aprobado",
        "r": "<t xml:space=\"preserve\">Marque los cursos que haya aprobado</t>",
        "h": "Marque los cursos que haya aprobado",
        "w": "Marque los cursos que haya aprobado"
      },
      "I1": {
        "t": "s",
        "v": "Cual es su horario",
        "r": "<t xml:space=\"preserve\">Cual es su horario</t>",
        "h": "Cual es su horario",
        "w": "Cual es su horario"
      },
      "A2": {
        "t": "s",
        "v": "9/03/2018 1:42:41",
        "r": "<t xml:space=\"preserve\">9/03/2018 1:42:41</t>",
        "h": "9/03/2018 1:42:41",
        "w": "9/03/2018 1:42:41"
      },
      "B2": {
        "t": "s",
        "v": "Marco Mora ",
        "r": "<t xml:space=\"preserve\">Marco Mora </t>",
        "h": "Marco Mora ",
        "w": "Marco Mora "
      },
      "C2": {
        "t": "s",
        "v": "2692-2862",
        "r": "<t xml:space=\"preserve\">2692-2862</t>",
        "h": "2692-2862",
        "w": "2692-2862"
      },
      "D2": {
        "t": "s",
        "v": "50.001 – 100.000",
        "r": "<t xml:space=\"preserve\">50.001 â�� 100.000</t>",
        "h": "50.001 – 100.000",
        "w": "50.001 – 100.000"
      },
      "E2": {
        "t": "s",
        "v": "Si, sobre las mujeres. Podría ser algún interés externo. ",
        "r": "<t xml:space=\"preserve\">Si, sobre las mujeres. PodrÃ­a ser algÃºn interÃ©s externo. </t>",
        "h": "Si, sobre las mujeres. Podría ser algún interés externo. ",
        "w": "Si, sobre las mujeres. Podría ser algún interés externo. "
      },
      "F2": {
        "t": "s",
        "v": "Sí",
        "r": "<t xml:space=\"preserve\">SÃ­</t>",
        "h": "Sí",
        "w": "Sí"
      },
      "G2": {
        "t": "s",
        "v": "No",
        "r": "<t xml:space=\"preserve\">No</t>",
        "h": "No",
        "w": "No"
      },
      "H2": {
        "t": "s",
        "v": "Introducción a la Programación, Bases de Datos I, Programación Orientada a Objetos, Sistemas Operativos",
        "r": "<t xml:space=\"preserve\">IntroducciÃ³n a la ProgramaciÃ³n, Bases de Datos I, ProgramaciÃ³n Orientada a Objetos, Sistemas Operativos</t>",
        "h": "Introducción a la Programación, Bases de Datos I, Programación Orientada a Objetos, Sistemas Operativos",
        "w": "Introducción a la Programación, Bases de Datos I, Programación Orientada a Objetos, Sistemas Operativos"
      },
      "A3": {
        "t": "s",
        "v": "8/04/2018 17:50:15",
        "r": "<t xml:space=\"preserve\">8/04/2018 17:50:15</t>",
        "h": "8/04/2018 17:50:15",
        "w": "8/04/2018 17:50:15"
      },
      "B3": {
        "t": "s",
        "v": "Lucas",
        "r": "<t xml:space=\"preserve\">Lucas</t>",
        "h": "Lucas",
        "w": "Lucas"
      },
      "C3": {
        "t": "n",
        "v": 12334526,
        "w": "12334526"
      },
      "D3": {
        "t": "s",
        "v": "50.001 – 100.000",
        "r": "<t xml:space=\"preserve\">50.001 â�� 100.000</t>",
        "h": "50.001 – 100.000",
        "w": "50.001 – 100.000"
      },
      "E3": {
        "t": "s",
        "v": "Si por esto",
        "r": "<t xml:space=\"preserve\">Si por esto</t>",
        "h": "Si por esto",
        "w": "Si por esto"
      },
      "F3": {
        "t": "s",
        "v": "No",
        "r": "<t xml:space=\"preserve\">No</t>",
        "h": "No",
        "w": "No"
      },
      "G3": {
        "t": "s",
        "v": "No",
        "r": "<t xml:space=\"preserve\">No</t>",
        "h": "No",
        "w": "No"
      },
      "H3": {
        "t": "s",
        "v": "Introducción a la Programación, Bases de Datos I",
        "r": "<t xml:space=\"preserve\">IntroducciÃ³n a la ProgramaciÃ³n, Bases de Datos I</t>",
        "h": "Introducción a la Programación, Bases de Datos I",
        "w": "Introducción a la Programación, Bases de Datos I"
      },
      "A4": {
        "t": "s",
        "v": "8/04/2018 17:50:57",
        "r": "<t xml:space=\"preserve\">8/04/2018 17:50:57</t>",
        "h": "8/04/2018 17:50:57",
        "w": "8/04/2018 17:50:57"
      },
      "B4": {
        "t": "s",
        "v": "Alberto",
        "r": "<t xml:space=\"preserve\">Alberto</t>",
        "h": "Alberto",
        "w": "Alberto"
      },
      "C4": {
        "t": "n",
        "v": 213452,
        "w": "213452"
      },
      "D4": {
        "t": "s",
        "v": "160.001 – 190.000",
        "r": "<t xml:space=\"preserve\">160.001 â�� 190.000</t>",
        "h": "160.001 – 190.000",
        "w": "160.001 – 190.000"
      },
      "E4": {
        "t": "s",
        "v": "No por aquello",
        "r": "<t xml:space=\"preserve\">No por aquello</t>",
        "h": "No por aquello",
        "w": "No por aquello"
      },
      "F4": {
        "t": "s",
        "v": "Sí",
        "r": "<t xml:space=\"preserve\">SÃ­</t>",
        "h": "Sí",
        "w": "Sí"
      },
      "G4": {
        "t": "s",
        "v": "Si",
        "r": "<t xml:space=\"preserve\">Si</t>",
        "h": "Si",
        "w": "Si"
      },
      "H4": {
        "t": "s",
        "v": "Introducción a la Programación, Programación Orientada a Objetos, Sistemas Operativos",
        "r": "<t xml:space=\"preserve\">IntroducciÃ³n a la ProgramaciÃ³n, ProgramaciÃ³n Orientada a Objetos, Sistemas Operativos</t>",
        "h": "Introducción a la Programación, Programación Orientada a Objetos, Sistemas Operativos",
        "w": "Introducción a la Programación, Programación Orientada a Objetos, Sistemas Operativos"
      }
    }
  ]
}
*/










/*{
    questions: [
        "Pregunta 1",
        "Pregunta 2"
    ],
    answers: [
        [
            "answer1",
            "answer2"
        ],
        [
            "answer1",
            "answer2"
        ],
        [
            "answer1",
            "answer2"
        ]
    ]
}*/
