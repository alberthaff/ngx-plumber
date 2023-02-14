import {Pipe, PipeTransform} from '@angular/core';

export function dotsToCamelCase(input: string, ucFirst = false): string {
    let i = 0;
    return input
        .toLowerCase()
        .split('.')
        .map(it => {
            i++;
            if (i !== 1 || ucFirst) {
                return it.charAt(0).toUpperCase() + it.substr(1);
            }
            return it;
        })
        .join('');
}

@Pipe({
    name: 'scopeToCamelCase'
})
export class DotsToCamelCasePipe implements PipeTransform {
    transform(input: string, ucFirst: boolean) {
        return dotsToCamelCase(input, ucFirst);
    }
}
