import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Question } from '../objects/question'

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {

    @Input() questions: Question[]

    public answerAr: string[] = [ '', '', '' ]

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    public allQuestions = [
        {
            name: "¿Cuál venta utiliza más?",
            data: this.doughnutChartData,
            labels: this.doughnutChartLabels,
            type: this.doughnutChartType,
            isCollapsed: true,
        },
        {
            name: "¿Cuántas veces al año usa el tren?",
            dataset: this.barChartData,
            labels: this.barChartLabels,
            options: this.barChartOptions,
            legend: this.barChartLegend,
            type: this.barChartType,
            isCollapsed: true,
        },
    ]

    answer;
    formdata;
    isCollapsed = [ true, true ]
    constructor() { }

    ngOnInit() {
        this.formdata = new FormGroup({
            answer: new FormControl("abcd1234")
        });
        this.updateQuestions()
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(`changes: ${JSON.stringify(changes)}`);
        this.updateQuestions()
    }

    updateQuestions(){
        const qs: Question[] = this.questions
        this.allQuestions = []
        if(qs.length < 1) return
        for(const i of qs){
            const newQuestion: any = {}
            newQuestion.name = i.title
            newQuestion.type = ( i.type == "UNIC" ) ? "doughnut" : ( i.type == "MULT" ) ? "bar" : "none"
            newQuestion.isCollapsed = true
            if(newQuestion.type == "bar"){
                const dataset = []
                const labels = []
                const vals: any = {
                    data: [],
                    label: "Valor"
                }
                for(const j of i.answers){
                    vals.data.push(j.percentage)
                    labels.push(j.title)
                }
                dataset.push(vals)
                newQuestion.dataset = dataset;
                newQuestion.labels = labels;
                newQuestion.legend = true //this.barChartLegend;
                newQuestion.options = this.barChartOptions;
            }else if(newQuestion.type == "doughnut"){
                const data = []
                const labels = []
                for(const j of i.answers){
                    data.push(j.percentage)
                    labels.push(j.title)
                }
                newQuestion.data = data;
                newQuestion.labels = labels;
            }else{
                newQuestion.labels = []
            }
            this.allQuestions.push(newQuestion)
        }
    }

    onClickSubmit(data) {
        this.answer = data.answer;
    }
}
