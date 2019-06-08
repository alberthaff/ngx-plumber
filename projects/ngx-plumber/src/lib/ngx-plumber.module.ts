import {NgModule} from '@angular/core';
import {IsFunctionPipe} from './methods/is-function';
import {GlobalOffsetPipe} from './methods/global-offset';
import {IsDescendantPipe} from './methods/is-descenant';
import {ScopePipe} from './methods/scope';
import {DotsToCamelCasePipe} from './methods/dots-to-camel-case';
import {ScopeChildPipe} from './methods/scope-child';
import {ScopeCountPipe} from './methods/scope-count';
import {IssetElsePipe} from './methods/isset-else';
import {PadPipe} from './methods/pad';
import {PrettyNumberPipe} from './methods/pretty-number';

const methods = [
    GlobalOffsetPipe,
    IsDescendantPipe,
    IsFunctionPipe,
    IssetElsePipe,
    PadPipe,
    PrettyNumberPipe,
    ScopePipe,
    ScopeChildPipe,
    ScopeCountPipe,
    DotsToCamelCasePipe
];

@NgModule({
  declarations: methods,
  exports: methods
})
export class PlumberModule { }
