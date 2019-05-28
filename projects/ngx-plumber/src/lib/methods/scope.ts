import {Pipe, PipeTransform} from '@angular/core';

export function scope(data: any, scopeString: string): any {
    if (scopeString === '') {
        return data;
    }

    if (typeof data === 'undefined' || data === null) {
        return null;
    }

    scopeString.split('.').forEach((part) => {
        if (typeof data === 'undefined' || data === null) {
            return null;
        }
        data = data[part];
    });

    return data;
}

@Pipe({
    name: 'scope'
})
export class ScopePipe implements PipeTransform {
    transform(input: any, scopeString: string) {
        return scope(input, scopeString);
    }
}
