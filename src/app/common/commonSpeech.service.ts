import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { SpeechData } from './speechData';

@Injectable()
export class SpeechService{

    public speechData: SpeechData[];

    constructor(@Inject(Http) private http: Http){}

    getSpeechData(){
        this.http.get('assets/speech-data.json').subscribe(data => {
            this.speechData = data.json();
        });
    }
}