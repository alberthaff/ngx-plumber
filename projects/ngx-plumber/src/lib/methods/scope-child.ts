import {Pipe, PipeTransform} from '@angular/core';

export function scopeChild(scopeStr: string, child: number, includeParents = false): string {
    if (includeParents) {
        let result = '';
        scopeStr.split('.').forEach((item) => {
            result = `${result}.${item}`;
        });
    }
    return scopeStr.split('.')[child];
}

@Pipe({
    name: 'scopeChild'
})
export class ScopeChildPipe implements PipeTransform {
    transform(scope: string, child: number, includeParents = false) {
        return scopeChild(scope, child, includeParents);
    }
}
