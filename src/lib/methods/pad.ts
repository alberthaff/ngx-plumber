import {Pipe, PipeTransform} from '@angular/core';

export function pad(input: any, size: number): string {
    let s: string = input.toString();

    while (s.length < size) {
        s = '0' + s;
    }

    return s;
}

@Pipe({
    name: 'pad'
})
export class PadPipe implements PipeTransform {
    transform(input: any, size: number) {
        return pad(input, size);
    }
}
