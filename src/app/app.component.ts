import { Component, OnInit } from '@angular/core';
import {MedalsComponent} from "./components/medals/medals.component";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [MedalsComponent]
})
export class AppComponent implements OnInit {
    title = 'Olympics';

    first;
    second;
    third;

    loading: boolean = false;

    /**
     * Main Entry point of the medals component
     */
    ngOnInit() {
        this.loading = true;
    }
    onResults(medals) {
        this.first = medals[0];
        this.second = medals[1];
        this.third = medals[2];
        this.loading = false;
    }
}
