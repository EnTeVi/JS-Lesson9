// 1. - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту


for (let i of simpsons) {
    document.write(
       ` <div class="member">
            <h3>${i.name}</h3>
            <h3>${i.surname}</h3>
            <h3>${i.age}</h3>
            <p>${i.info}</p>
            <img src="${i.photo}" alt="">
        </div>`
    );
}




// 2. Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких
// будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------


// for (let key of coursesArray) {
//
//
//         document.write(
//             `<div class="member">
//             <div><h3>${key.title}</h3></div>
//             <div><h3>${key.monthDuration}</h3></div>
//             <div><h3>${key.hourDuration}</h3></div>`
//         );
//     document.write(`<div><ul>`);
//     for (let i of key.modules) {
//
//         document.write( `<li>${i}</li>`);
//
//     }
//     document.write(`</ul></div>`);
//     document.write(`</div>`);
//
// }





//
//
// 3.    - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


// let div = document.createElement('div');
// div.className = 'wrap collapse alpha beta';
// div.innerText = 'Okten School'
// document.body.appendChild(div);
//
// let divClon = div.cloneNode(Node);
// document.body.appendChild(divClon);





// 4. - Є масив:
    let arr = ['Main', 'Products', 'About us', 'Contacts'];
function x(arr) {
// Взяти файл template1.html та додати в нього скріпт котрий для кожного
// елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

    let menu = document.getElementsByClassName('menu')[0];
    for (let key of arr) {
        let li = document.createElement('li');
        li.innerText = `${key}`;
        menu.appendChild(li);
    }
}

// window.addEventListener("load", x(arr));
// ----------or----------
// window.addEventListener("load", function(event) {
//     x(arr);
// });
// ----------or----------
// x(arr);



// 5. - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// for (let key of coursesAndDurationArray) {
//     document.write(`<div> ${key.title} — ${key.monthDuration} </div>`);
// }




// 6. - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та
// <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


function iter(xArray) {
    for (let key of xArray) {
        document.write(`<div class='item'>
                        <h1 class='heading'> ${key.title} </h1> 
                        <p class='description'> ${key.monthDuration} </p>
                        </div>`)
    }
}

// iter(coursesAndDurationArray);



// -----------
//
// 7.    - Створити довільний елемент з id = text.  Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// let elem = document.createElement('div');
// elem.id = 'text';
// document.body.appendChild(elem);
//
// let elemBut = document.createElement('input');
// elemBut.id = 'but';
// elemBut.type = 'button';
// document.body.appendChild(elemBut);
//
// document.getElementById('but').onclick = function () {
//     document.getElementById('text').hidden = true;
// }










// 8.    - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача



// let text = document.createElement('input');
// text.id = 'textF';
// text.type = 'text';
// text.placeholder = 'Enter your age, pleace';
// document.body.appendChild(text);
//
// let elemBut2 = document.createElement('input');
// elemBut2.id = 'but2';
// elemBut2.type = 'button';
// document.body.appendChild(elemBut2);
//
//
// document.getElementById('but2').onclick = function () {
//     let x1 = document.getElementById('textF').value;
//
//     if (x1 == false) {
//         console.log('What this?');
//     }
//     else if (x1 < 18) {
//         console.log('Go to kindergarten, kid');
//     }
//     else if (x1 >= 18) {
//         console.log("Welcome to the adult world, old man");
//     }
//      else {
//         console.log('What a fuck, nigger?');
//     }
// }




// 9. *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий -
// кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)


// let div = document.createElement('div');
//
// let form = document.createElement('form');
// form.id = 'form';
//
//
// let inputOne = document.createElement('input');
// inputOne.id = 'inputOne';
// inputOne.type = 'number';
// inputOne.placeholder = 'Enter the number of columns';
//
// let inputTwo = document.createElement('input');
// inputTwo.id = 'inputTwo';
// inputTwo.type = 'number';
// inputTwo.placeholder = 'Enter the number of rows';
//
// let inputThree = document.createElement('input');
// inputThree.id = 'inputThree';
// inputThree.type = 'text';
// inputThree.placeholder = 'Enter your content';
//
//
// let btn = document.createElement('button');
// btn.innerText = 'Save'
// btn.style.margin = '10px';
//
// document.body.appendChild(div);
// div.appendChild(form);
// form.append(inputOne, inputTwo, inputThree, btn);
//
// let result = document.createElement('div');
// result.classList.add('div');
// result.classList.add('tab');
//
// btn.onclick = function (e) {
//     document.body.appendChild(result);
//     e.preventDefault();
//     result.innerHTML = '';
//
//     let rows = +inputOne.value;
//     let colums = +inputTwo.value;
//     let content = inputThree.value;
//
//     for (let i = 0; i < rows; i++) {
//
//         let blockRow = document.createElement('div');
//         blockRow.style.display = 'flex';
//         for (let o = 0; o < colums; o++) {
//
//             let width = 100;
//             let cardItem = document.createElement('div');
//             cardItem.style.minWidth = `${width}px`;
//             cardItem.style.border = '1px solid black';
//             cardItem.style.margin = '3px';
//
//             let pItem = document.createElement('div');
//             pItem.innerText = content;
//             pItem.style.fontSize = '18px';
//             blockRow.append(cardItem);
//             cardItem.append(pItem);
//         }
//         result.appendChild(blockRow);
//         console.log(blockRow);
//     }
// };















let obj = {
    title: 'FullStack',
    monthDuration: 7,
    hourDuration: 909,
    modules: ['html',
        'css',
        'js',
        'mysql',
        'mongodb',
        'react',
        'angular',
        'aws',
        'docker',
        'git',
        'node.js',
        'python',
        'java']
}


// document.write(`<div class="container">
//         <div>${obj.title}</div>
//         <div class="box2">${obj.monthDuration}</div>
//         <div class="box3">${obj.hourDuration}</div>`);
//
// document.write(`<div><ul>`);
// for (let key of obj.modules) {
//     document.write(`<li> ${key} </li>`);
// }
// document.write(`</ul></div>`);
// document.write(`</div>`);
