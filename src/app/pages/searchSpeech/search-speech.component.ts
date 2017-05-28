import { Component, Inject } from '@angular/core';

import { SpeechData } from '../../common/speechData';
import { SpeechService } from '../../common/commonSpeech.service'

@Component({
    selector: 'search-speech',
    templateUrl: './search-speech.html'
})
export class SearchSpeech{

    speech: SpeechData;

    constructor(@Inject(SpeechService) private service: SpeechService){}

    viewSpeech(speech: SpeechData){
        this.speech = speech;
    }

    backToList(){
        this.speech = null;
    }
}