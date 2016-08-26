import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import {FilterPipe} from "./filter.pipe";

@NgModule({
    declarations: [
        AppComponent,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule
    ],
    providers: [FormBuilder, DataService],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
