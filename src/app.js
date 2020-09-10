const appRoot = document.getElementById('app');
// console.log('app')

// class Person {
//   constructor(name, age = 0) {
//     this.name = name;
//     this.age = age
//   }

//   getGreeting(){
//     return `Hi. I am ${this.name}!`
//   }

//   getDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }



// class Traveler extends Person {
//   constructor(name, age, homeLocation){
//     super(name, age);
//     this.homeLocation = homeLocation;
//   }

//   hasHomeLocation(){
//     return !!this.homeLocation
//   }

//   getGreeting(){
//     let greeting = super.getGreeting();
//     if(this.hasHomeLocation()) {
//       greeting+= `I am visiting from ${this.homeLocation}`
//     }

//     return greeting

//   }
// }


// const me = new Traveler('Wiz', 12, '')
// console.log(me.getGreeting())

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecison</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render(){
    return (
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
      </ul>
    )
  }
}

class AddOption extends React.Component {
  render(){
    return (
      <form>
        <input/>
        <button>Add</button>
      </form>
    )
  }
}

const jsx = (
  <div>
    <Header/>
    <Action/>
    <Options/>
    <AddOption/>
  </div>
)


ReactDOM.render(jsx, appRoot)