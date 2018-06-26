var todoForm = document.querySelector('.todoform');
var listMenu = document.querySelector('#list_items');
var showDivButton = document.getElementById('showList');
var listObjectData = JSON.parse(localStorage.getItem('item')) || [];

function addItemList(e) {
    e.preventDefault();
    var addItemInput = document.querySelector('#addItem').value;
    var listItem = {
        listName: addItemInput,
        done: false
    };
    listObjectData.push(listItem);
    localStorage.setItem('item', JSON.stringify(listObjectData));
    renderListName(listObjectData);
    this.reset();
}

function renderListName(listObjectsData) {
    listMenu.innerHTML = "";
    for (var i = 0; i < listObjectData.length; i++) {
        var li = document.createElement('li');
        var label = document.createElement('label');
        label.textContent = listObjectData[i].listName;

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = listObjectsData[i].done;
        checkbox.setAttribute('data-index', i);


        li.appendChild(checkbox);
        li.appendChild(label);
        listMenu.appendChild(li);
        console.log(listMenu);
    }
}

function toggleHandle(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    var el = e.target;
    var index = el.dataset.index;
    listObjectData[index].done = !listObjectData[index].done;
    localStorage.setItem('item', JSON.stringify(listObjectData));
    renderListName(listObjectData);
}


todoForm.addEventListener("submit", addItemList);
renderListName(listObjectData);
listMenu.addEventListener("change", toggleHandle)