import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {DataService} from "../../data.service";
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-medals',
    templateUrl: 'medals.component.html',
    styleUrls: ['medals.component.css']
})
export class MedalsComponent implements OnInit {

    medals:any;
    loading: boolean = false;
    @Output() onResult = new EventEmitter<any>();
    constructor(private _data:DataService) {
    }

    /**
     * Main Entry point of the medals component
     */
    ngOnInit() {
        this.populateMedals();
    }

    populateMedals() {
        this.loading = true;
        return this._data.get(environment.api_url).toPromise()
            .then(data => this.medals = this.parseData(data, 'Total', 'desc') )
            .then(data => {
                this.onResult.emit(this.medals);
            })
            .then(() => this.loading = false);
    }

    /**
     * Function that parses the give data
     * @param data json array return from the remote api
     * @param field the field to order by
     * @param order the order can be desc or asc
     * @returns {any|*[]}
     */
    parseData(data:any, field:string, order:string = 'desc') {
        return this.sortData(this.parseMedals(data), field);
    }

    /**
     * Function that sort the data and convert them to an array
     * @param data
     * @param field
     * @param order
     * @returns {any|*[]}
     */
    sortData(data:any, field:string, order:string = 'desc') {
        return Object.keys(data).map(key => data[key]).sort((a, b) => {
            return order === 'desc' ? b.Total - a.Total : a.Total - b.Total;
        });
    }

    /**
     * Parse the list of datas to group them by country and count medals for each country
     * @param data
     * @returns {any}
     */
    parseMedals(data:any) {
        return data.reduce((prev, curr) => {

            //initialize the data
            (prev[curr['country']] = prev[curr['country']] ||
                {'Gold': 0, 'Silver': 0, 'Bronze': 0, 'Total': 0} );

            prev[curr['country']]['Gold'] += curr['medal'] === 'Gold' ? 1 : 0;
            prev[curr['country']]['Silver'] += curr['medal'] === 'Silver' ? 1 : 0;
            prev[curr['country']]['Bronze'] += curr['medal'] === 'Bronze' ? 1 : 0;
            prev[curr['country']]['country'] = curr['country'];
            prev[curr['country']]['Total'] =
                prev[curr['country']]['Gold'] + prev[curr['country']]['Silver'] + prev[curr['country']]['Bronze'];

            return prev;
        }, {});
    }

}
