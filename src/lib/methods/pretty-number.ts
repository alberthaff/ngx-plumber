import {Pipe, PipeTransform} from '@angular/core';

export function prettyNumber(number: any, decimals: number = 2, thousandSeparator = true): string {
    if (typeof number === 'undefined') {
        return '';
    }

    const float = parseFloat2(number);

    return float.toLocaleString('da-DK', { // TODO Get locale from global settings.
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
        minimumIntegerDigits: 1,
        useGrouping: thousandSeparator,
    });
}

function parseFloat2(input): number {
    if (input === null || typeof input === 'undefined') {
        return 0;
    } else if (input.toString().replace(/[^0-9.,]/g, '') === '') {
        return 0;
    } else if (isNaN(input)) {
        return parseFloat(input.toString().replace(/\./g, '').replace(',', '.'));
    } else {
        return parseFloat(input);
    }
}

@Pipe({
    name: 'prettyNumber'
})
export class PrettyNumberPipe implements PipeTransform {
    transform(number: any, inpDecimals: number) {
        return prettyNumber(number, inpDecimals);
    }
}
