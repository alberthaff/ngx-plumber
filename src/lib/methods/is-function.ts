import {Pipe, PipeTransform} from '@angular/core';

export function isFunction(input: any): boolean {
    return input && {}.toString.call(input) === '[object Function]';
}

@Pipe({
    name: 'isFunction'
})
export class IsFunctionPipe implements PipeTransform {
    transform(input: any) {
        return isFunction(input);
    }
}
