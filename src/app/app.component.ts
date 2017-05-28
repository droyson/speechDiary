import { Component, Inject } from '@angular/core';

import { NavBar } from './pages/navBar/navbar.component';
import { SpeechService } from './common/commonSpeech.service';

@Component({
    selector: 'my-app',
    template: `<div class="row">
                    <div class="col-sm-12">
                        <h1>Speech Diary</h1>
                    </div>
                </div>
                <nav-bar></nav-bar>
                <router-outlet></router-outlet>`
})
export class AppComponent{

    constructor(@Inject(SpeechService) private service: SpeechService){
        this.service.getSpeechData();
    }
}