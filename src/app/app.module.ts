import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';

import { AppRouteModule } from './app-route.module';

import { AppComponent } from './app.component';
import { NavBar } from './pages/navBar/navbar.component';
import { MySpeech } from './pages/mySpeech/my-speech.component';
import { SearchSpeech } from './pages/searchSpeech/search-speech.component';
import { SubmitSpeech } from './pages/submitSpeech/submit-speech.component';
import { SpeechService } from './common/commonSpeech.service';
import { SpeechView } from './common/speech-detail-view.component';

@NgModule({
    imports: [BrowserModule, AppRouteModule, HttpModule, FormsModule, CommonModule],
    declarations: [AppComponent, NavBar, MySpeech, SearchSpeech, SubmitSpeech, SpeechView],
    providers: [SpeechService],
    bootstrap: [AppComponent]
})
export class AppModule{}