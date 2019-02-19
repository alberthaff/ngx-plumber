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

| Method                    | Return type   | Description   |
| :------------------------ |:------------- | ------------- |
| isFunction(input)         | boolean       | Check whether a variable contains a function or not. |
| scope(input)              | any           | Extract data from an object, with a scope. |


## Element methods

| Method                    | Return type   | Description   |
| :------------------------ |:------------- | ------------- |
| isDescendant(parent, child)  | boolean        | Check whether an element is a descendant of an other element. |
| globalOffset(elementRef)  | {x, y}        | Get the global offset of an HTML element. |
