import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterResults'
})
export class FilterPipe implements PipeTransform {
    constructor() {

    }

    transform(values, args?:any) {
        return values.filter(item => {
            return args ? item.country.toLowerCase().indexOf(args.toLowerCase()) !== -1 : true;
        })
    }
}
