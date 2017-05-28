import { Component, Inject } from '@angular/core';

import { SpeechData } from '../../common/speechData';
import { SpeechService } from '../../common/commonSpeech.service';

@Component({
    selector: 'my-speech',
    templateUrl: './my-speech.html'
})
export class MySpeech{

    speechData: SpeechData[] = [];
    selectedSpeech: SpeechData;
    selectedIndex: number;

    constructor(@Inject(SpeechService) private service: SpeechService){
    }

    selectSpeech(speech: SpeechData){
        this.selectedSpeech = Object.assign({}, speech);
    }

    updateSpeech(speech: SpeechData){
        this.service.speechData.splice(this.selectedIndex, 1, speech);
    }

    deleteSpeech(){
        this.service.speechData.splice(this.selectedIndex, 1);
        this.selectedSpeech = null;
    }
}