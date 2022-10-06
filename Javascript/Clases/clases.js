// Clases Javascript

class Person {
  constructor(name, lastName, age) {
    this._name = name;
    this._lastName = lastName;
    this._age = age;
  }

  salute(){
    return `Hola soy ${this._name} ${this._lastName} y tengo ${this._age} años`
  }
}

const person1 = new Person('Camila', 'Rodriguez', '23').salute();

console.log(person1);
