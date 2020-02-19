const arr = ['⇑','⇗', '⇒', '⇓', '⇙', '⇐', '⇖'];

function spinner (ob) {
    console.clear();
    ob.counter = (ob.counter + 1) % arr.length;
    console.log(arr[ob.counter]);
}

setInterval(spinner, 1000, {counter: 0});