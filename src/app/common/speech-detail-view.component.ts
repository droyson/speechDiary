import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SpeechData } from './speechData';

@Component({
    selector: 'speech-detail-view',
    templateUrl: './speech-detail-view.html'
})
export class SpeechView{
    @Input() selectedSpeech: SpeechData;
    @Input() type: string;

    @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
    @Output() saveEvent: EventEmitter<any> = new EventEmitter();

    sharedWith: string;

    deleteSpeech(){
        this.deleteEvent.emit();
    }

    saveSpeech(){
        if(this.selectedSpeech.name){
            this.saveEvent.emit(this.selectedSpeech);
        }
    }

    resetSpeech(){
        this.selectedSpeech = new SpeechData();
        this.selectedSpeech.author = 'Politico1';
        this.selectedSpeech.date = new Date();
    }

    share(){
        this.selectedSpeech.sharedWith = this.selectedSpeech.sharedWith || [];
        this.selectedSpeech.sharedWith.push(this.sharedWith);
    }
}