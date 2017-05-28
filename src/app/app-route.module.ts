import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MySpeech } from './pages/mySpeech/my-speech.component';
import { SearchSpeech } from './pages/searchSpeech/search-speech.component';
import { SubmitSpeech } from './pages/submitSpeech/submit-speech.component';

const routes: Routes = [
    { path: '', redirectTo: '/myspeech', pathMatch: 'full'},
    { path: 'myspeech', component: MySpeech },
    { path: 'search', component: SearchSpeech },
    { path: 'new', component: SubmitSpeech }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouteModule{}