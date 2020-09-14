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
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick(){
    const pick = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[pick];
    alert(option)
  }

  handleAddOption(option){
    if(!option) {
      return 'Enter valid option'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
    }

  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header 
          title={title}
          subtitle={subtitle}
        />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

const Header = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}


const Action = (props) => {

  return (
    <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
        What should I do?</button>
      </div>
  )
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove all</button>
    {props.options.map(option => <Option key={count++} optionText={option}/>)}
  </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
    </div>
  )
}


class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    e.target.elements.option.value = ''

    this.setState(() => {
      return { error }
    })
  }
  

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input name='option'/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp/>, appRoot)