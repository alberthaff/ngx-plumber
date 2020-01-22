import { Pipe, PipeTransform } from '@angular/core';

export function ifDeltaSeconds(input: Date, second: number): boolean {
    if (input === null || typeof input === 'undefined') {
        return false;
    }
    if (input.getTime() + second * 1000 > Date.now()) {
        return true;
    }

    return false;
}

@Pipe({
    name: 'ifDeltaSeconds',
    pure: false
})
export class IfDeltaSecondsPipe implements PipeTransform {
    transform(input: Date, seconds: number) {
        return ifDeltaSeconds(input, seconds);
    }
}
