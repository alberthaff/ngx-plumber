# ngx-plumber

This library is a collection of helper functions and pipes. 


# Methods

All methods are available as stand-alone functions and pipes. 

Typescript example: 

```typescript
import { globalOffset } from 'ngx-plumber';

@Component({
    templateUrl: './app.component.html'
})

export class AppComponent {
    element = ViewChild('test');
    
    constructor() {
        const offset = globalOffset(this.element);
    }
}
```

Pipe exaple:
```html
<div *ngIf="(element | globalOffset)?.x > 100">

</div>
```

## General methods

| Method                                             | Return type   | Description   |
| :------------------------------------------------- |:------------- | ------------- |
| dotsToCamelCase(input: string, ucFirst: boolean)   | boolean       | Convert a dot.seperated.string into a camelCaseString. |
| isFunction(input: any)                             | boolean       | Check whether a variable contains a function or not. |
| scope(data: any, scope: string)                    | any           | Extract data from an object, with a scope. |
| scopeChild(scope: string, child: number, includeParents = false) | string | Get a part of a scope. |
| scopeCount(scope: string)                          | number        | Count the number of "steps" or children in a scope. |


## Element methods

| Method                    | Return type   | Description   |
| :------------------------ |:------------- | ------------- |
| isDescendant(parent, child)  | boolean        | Check whether an element is a descendant of an other element. |
| globalOffset(elementRef)  | {x, y}        | Get the global offset of an HTML element. |

## Date and time methods
| Method                    | Return type   | Description   |
| :------------------------ |:------------- | ------------- |
| ifDeltaSeconds(date, seconds)  | boolean        | Check whether a certain date + x-amount of seconds has been passed. |
