import {Pipe, PipeTransform} from '@angular/core';

export function issetElse(input: any, defaultValue: any = null): boolean {
    if (typeof input !== 'undefined' && input !== null) {
        return input;
    }

    return defaultValue;
}

@Pipe({
    name: 'issetElse'
})
export class IssetElsePipe implements PipeTransform {
    transform(input: any, defaultValue: any) {
        return issetElse(input, defaultValue);
    }
}
