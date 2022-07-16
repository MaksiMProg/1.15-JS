//1) 1) Создать блок, в котором будет находится инпут. При событии focus на инпуте в консоль должна приходить запись "Фокус"

let text = document.getElementById('text');
text.addEventListener('focus', function() {
    console.log('ФОКУС');
});
//2)Добавить событие focus на родительский блок, при фокусе у блока должна появляться рамка синго цвета\

let div = document.getElementById('div');
div.addEventListener('keydown', function() {
    div.classList.add('border');
});

//3) Создать объект с параметрами телефона. И этот объект поместить в localStorage Также создать переменные  своего имени, фамилии, добавить их в loacalStorage, после чего удалить оттуда имя
let user = {
    name: 'Lesha',
    surname: 'Smirnov',
    phonenumber: '298531431',
};

localStorage.setItem("object", JSON.stringify("user"));
if (localStorage.getItem('storedUsers')) {
    users = JSON.parse(localStorage.getItem('storedUsers'));
}
console.log(user);
localStorage.setItem('name', user.name);
localStorage.setItem('surname', user.surname);
localStorage.setItem('phonenumber', user.phonenumber);
console.log(localStorage.getItem('surname'));
localStorage.removeItem('name');