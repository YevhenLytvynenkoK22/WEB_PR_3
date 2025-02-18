function Employee(name, department, phone, salary) {
    this.name = name;
    this.department = department;
    this.phone = phone;
    this.salary = salary;
}

let newObj = new Employee("Alex", "Prod", "+38096345678", 27240);
newObj.adress = "rainbow 15/4";

function checkTask1() {
    alert(`Имя: ${newObj.name}\nОтдел: ${newObj.department}\nТелефон: ${newObj.phone}\nЗарплата: ${newObj.salary}\nАдрес: ${newObj.adress}`);
}

class Tour {
    constructor(country, rate, days, people) {
        this.country = country;
        this.rate = rate;
        this.days = days;
        this.people = people;
    }

    calculateCost() {
        return this.people * this.days * this.rate;
    }

    displayInfo() {
        return `Країна: ${this.country}, Вартість за день: ${this.rate}, Дні: ${this.days}, Кіл-сть людей: ${this.people}, Загальна вартість: ${this.calculateCost()}`;
    }
}

const turkeyTour = new Tour('Німечина', 220, 12, 6);
function checkTask2() {
    alert(turkeyTour.displayInfo());
}

String.prototype.uroven = "1";
String.prototype.printMe = function() {
    const level = this.uroven;
    alert(`<h${level}>Ура!</h${level}>`);
};

function printZagolovok() {
    let level = prompt("Введіть рівень заголовку (1-6):", "1");
    if (level < 1 || level > 6) {
        level = 1;
    }
    String.prototype.uroven = level;
    "".printMe();
}

function checkTask3() {
    printZagolovok();
}

const EmployeeInfo = {
    name: "Микита Василенко",
    department: "IT",
    phone: "123-456-7890",
    salary: "6500$",
    showInfo: function() {
        alert(`Им'я: ${this.name}\nВідділ: ${this.department}\nТелефон: ${this.phone}\nЗарплата: ${this.salary}`);
    }
};

function checkTask4() {
    EmployeeInfo.showInfo();
}

class MenuItem {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }

    show() {
        return `<li><a href="${this.url}">${this.title}</a></li>`;
    }
}

function checkTask5() {
    const menuItems = [];
    const menuCount = parseInt(prompt("Введите количество пунктов меню:", "4"), 10);
    for (let i = 0; i < menuCount; i++) {
        const title = prompt(`Введіть назву пункта ${i + 1}:`);
        const url = prompt(`Введіть URL для пункта ${i + 1}:`);
        menuItems.push(new MenuItem(title, url));
    }

    let menuHTML = "<ul>";
    menuItems.forEach(item => menuHTML += item.show());
    menuHTML += "</ul>";
    document.body.innerHTML += menuHTML;
}