import {Pipe, PipeTransform} from '@angular/core';

export function scopeCount(input: any): number {
    return input.split('.').length;
}

@Pipe({
    name: 'scopeCount'
})
export class ScopeCountPipe implements PipeTransform {
    transform(input: string) {
        return scopeCount(input);
    }
}
