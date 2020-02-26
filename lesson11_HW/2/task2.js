const dom = {
    inp: document.querySelector('#info'),
    btn: document.querySelector('#add'),
    ul: document.querySelector('#list')
};

dom.btn.addEventListener('click', () => {
    let listItem = document.createElement('li');
    let inputValue = dom.inp.value;
    let item = document.createTextNode(inputValue);
    listItem.append(item);

    if(inputValue = '') {
        alert('Enter to-do item')
    } else {
        dom.ul.prepend(listItem);
    }

    dom.inp.value = '';
    
    let todo = '';
    todo = dom.ul.innerHTML;
    localStorage.setItem('todoList', todo)
});

if (localStorage.getItem('todoList')) {
    dom.ul.innerHTML = localStorage.getItem('todoList');
}

