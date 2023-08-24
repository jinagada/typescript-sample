let click: 'click';
click = 'click';
click = 'dblclick'; // error

let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
mouseEvent = 'click';
mouseEvent = 'dblclick';
mouseEvent = 'mouseup';
mouseEvent = 'mousedown';
mouseEvent = 'mouseover'; // error

type MouseEvent1 = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent1: MouseEvent1;
mouseEvent1 = 'click';
mouseEvent1 = 'dblclick';
mouseEvent1 = 'mouseup';
mouseEvent1 = 'mousedown';
mouseEvent1 = 'mouseover'; // error

let anotherEvent: MouseEvent1;
