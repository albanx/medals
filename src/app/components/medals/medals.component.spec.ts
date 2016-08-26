/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MedalsComponent } from './medals.component';
import { DataService } from '../../data.service';
import { async, TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';

describe('Component: Medals', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                HttpModule
            ],
            providers: [
                DataService
            ]
        });


    });

    it('should create an instance', inject([DataService], (_data:DataService) => {
        let component = new MedalsComponent(_data);
        expect(component).toBeTruthy();
    }));

    it('should get some data', inject([DataService], (_data:DataService) => {
        let component = new MedalsComponent(_data);
        component.populateMedals().then(data => {
            expect(data).toBeTruthy();
            expect(component.medals).not.toBeUndefined();
        });
    }));


    it('sortData should return a sorted array from object', inject([DataService], (_data:DataService) => {
        let component = new MedalsComponent(_data);
        let data = {
            'da': {sort: 100},
            'as': {sort: 23},
            'ver': {sort: 34},
            'ser': {sort: 34},
            'ber': {sort: 65}
        };

        let dataSorted = component.sortData(data, 'sort');
        expect(dataSorted[0].sort).toEqual(100);
    }));
});
