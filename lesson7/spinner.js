const arr = ['⇑','⇗', '⇒', '⇓', '⇙', '⇐', '⇖'];

function spinner (ob) {
    console.clear();
    ob.counter = (ob.counter + 1);// % arr.length;
    console.log(arr[ob.counter]);
}

//setInterval(spinner, 1000, {counter: 0});


function spinner2 (ob) {
    console.clear();
    console.log(`[${'@'.repeat(ob.counter)}${'-'.repeat(10 - ob.counter)}]`);
    ob.counter = (ob.counter + 1) % 11;
}

setInterval(spinner2, 1000, {counter:0})

`[${'@'.repeat(ob.counter)}${'-'.repeat(10-ob.counter)}]`

