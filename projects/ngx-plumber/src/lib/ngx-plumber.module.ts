import {NgModule} from '@angular/core';
import {IsFunctionPipe} from './methods/is-function';
import {GlobalOffsetPipe} from './methods/global-offset';
import {IsDescendantPipe} from './methods/is-descenant';
import {ScopePipe} from './methods/scope';

const methods = [
    GlobalOffsetPipe,
    IsDescendantPipe,
    IsFunctionPipe,
    ScopePipe
];

@NgModule({
  declarations: methods,
  exports: methods
})
export class PlumberModule { }
