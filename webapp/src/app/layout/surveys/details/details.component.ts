import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Survey } from '../objects/survey'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    selected: number = 0

    @Input() surveys: Survey[]

    @Output('selectedSurveyIndex')
	selectedSurveyIdx = new EventEmitter<number>();

    onChange(value){
        const justNames = this.surveys.map( s => s.name )
        this.selected = justNames.indexOf(value);
        this.selectedSurveyIdx.emit(this.selected)
    }
}
