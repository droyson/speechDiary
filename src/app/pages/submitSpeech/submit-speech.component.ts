import { Component, Inject } from '@angular/core';

import { SpeechData } from '../../common/speechData';
import { SpeechService } from '../../common/commonSpeech.service';

@Component({
    selector: 'submit-speech',
    templateUrl: './submit-speech.html'
})
export class SubmitSpeech{

    speech: SpeechData = new SpeechData();

    constructor(@Inject(SpeechService) private service: SpeechService){
        this.speech.author = "Politico1";
        this.speech.date = new Date();
    }

    saveSpeech(newSpeech: SpeechData){
        this.service.speechData.push(newSpeech);
    }
}