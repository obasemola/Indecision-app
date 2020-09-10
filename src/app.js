const appRoot = document.getElementById('app');
console.log('app')

class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

const me = new Person('Wiz', )
console.log(me.getDescription())



// ReactDOM.render(template, appRoot)