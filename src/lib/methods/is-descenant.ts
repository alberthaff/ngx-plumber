import {ElementRef, Pipe, PipeTransform} from '@angular/core';

export function isDescendant(pParent: any, pChild: any) {
    try {
        while (pChild !== null) {
            if (pChild === pParent) {
                return true;
            } else {
                pChild = (pChild.parentNode as HTMLElement);
            }
        }
    } catch (e) {
        console.warn('isDescendant ', e);
    }
    return false;
}

@Pipe({
    name: 'globalOffset'
})
export class IsDescendantPipe implements PipeTransform {
    transform(parent: ElementRef, child: ElementRef) {
        return isDescendant(parent, child);
    }
}
