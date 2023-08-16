class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showPersonInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

const person1 = new Person('Маша', 15);
const person2 = new Person('Міша', 25);
const person3 = new Person('Даша', 48);
const person4 = new Person('Саша', 17);

// person1.showPersonInfo();
// person2.showPersonInfo();
// person3.showPersonInfo();
// person4.showPersonInfo();

class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    // this.owner = null; Не знаю чи потрібна ця строка, бо на код не впливає
  }
  setOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log('Власник не може бути молодше 18 років');
    }
  }
  showCarInfo() {
    console.log(
      `Марка ${this.brand}, Модель ${this.model}, Рік випуску ${this.year}, Номерний знак ${this.licensePlate}`
    );
    if (this.owner) {
      console.log('Інформація про власника:');
      this.owner.showPersonInfo();
    } else {
      console.log('Автомобіль не має власника');
    }
  }
}
const car1 = new Car('Toyota', 'Camry', 2022, 'AA1234BB');
const car2 = new Car('Volkswagen', 'Passat', 2023, 'ВС4567АА');
const car3 = new Car('Ford', 'Mustang', 2022, 'ЕЕ8901ВС');
const car4 = new Car('BMW', 'X5', 2021, 'МН2345КЕ');

car1.setOwner(person1);
car2.setOwner(person2);
car3.setOwner(person3);
car4.setOwner(person4);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();
car4.showCarInfo();
