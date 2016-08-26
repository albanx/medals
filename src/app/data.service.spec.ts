/* tslint:disable:no-unused-variable */
import { async, TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpModule, Http } from '@angular/http';

describe('Service: Data', () => {
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

    it('should create instance', inject([DataService], (service:DataService) => {
        expect(service).toBeTruthy();
    }));
});
