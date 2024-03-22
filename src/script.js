const listaDeFrutas = ['banana', 'Morango', 'Goiaba', 'Pêssego'];

function createFruitSection() {
    const body = document.body;
    const main = document.createElement('main');
    const imageTree = document.createElement('img');
    const title = document.createElement('h1');
    const list = document.createElement('ul');

    imageTree.src = './assets/img/arvore.jpg';
    imageTree.classList.add('main_image');

    title.innerHTML = '<span>Vida</span>Fruta';
    title.classList.add('main_title');

    list.classList.add('main_list');

    main.append(imageTree, title, list);

    body.appendChild(main);
}

createFruitSection();

function insertFruitList(fruitList) {
    const ul = document.querySelector('.main_list');

    for (let index = 0; index < fruitList.length; index++) {
        const li = document.createElement('li');
        const h2 = document.createElement('h2');

        li.classList.add('fruit_list_card');
        h2.innerText = fruitList[index];

        li.appendChild(h2);
        ul.appendChild(li);
    }
}
insertFruitList(listaDeFrutas);
