import {ElementRef, Pipe, PipeTransform} from '@angular/core';

export function globalOffset(e: ElementRef) {
    const offset = { x: 0, y: 0 };

    let element = e.nativeElement;
    while (element) {
        offset.x += element.offsetLeft;
        offset.y += element.offsetTop;
        element = element.offsetParent;
    }

    if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
        offset.x -= document.documentElement.scrollLeft;
        offset.y -= document.documentElement.scrollTop;
    } else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
        offset.x -= document.body.scrollLeft;
        offset.y -= document.body.scrollTop;
    } else if (window.pageXOffset || window.pageYOffset) {
        offset.x -= window.pageXOffset;
        offset.y -= window.pageYOffset;
    }

    return offset;
}

@Pipe({
    name: 'globalOffset'
})
export class GlobalOffsetPipe implements PipeTransform {
    transform(input: ElementRef) {
        return globalOffset(input);
    }
}
