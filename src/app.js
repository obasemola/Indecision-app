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

let count = 0;

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing four']
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick =  this.handlePick.bind(this);
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick(){
    let pick = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[pick])
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0}/>
        <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
        <AddOption/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {


  render(){
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
        What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {

  render(){
    return (
        <ul>
          <button onClick={this.props.handleDeleteOptions}>Remove all</button>
          <p>{this.props.options.length}</p>
          {this.props.options.map(option => <Option key={count++} optionText={option}/>)}
        </ul>
    )
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends React.Component {

  handleAddOption(e){
    e.preventDefault();
    const some = e.target.elements.option.value.trim();
    if (some) {
      alert(some)
    }
    e.target.elements.option.value = ''
  }

  render(){
    return (
      <form onSubmit={this.handleAddOption}>
        <input name='option'/>
        <button>Add</button>
      </form>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, appRoot)