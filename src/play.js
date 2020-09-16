class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }


  componentDidMount(){
    const num = localStorage.getItem('count');
    const count = parseInt(num, 10);
    if(isNaN(num)) {
      return
    } else {
      this.setState(() => ({count}))

    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count)
    }
  }


  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
      );
  }
}

// class VisibilityToggle extends React.Component {
//   constructor(props){
//     super(props);
//     this.toggleVisibility = this.toggleVisibility.bind(this);
//     this.state = {
//       visibility: false
//     };
//   }

//   toggleVisibility(){
//     this.setState((prevState) => {
//       return {
//         visibility: !prevState.visibility
//       }
//     })
//   }

//   render(){
//     return (
//       <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
//         {this.state.visibility && (
//           <div>
//             <p>Hey, These are some details you can now see</p>
//           </div>
//         )}

//       </div>
//     )
//   }
// }

ReactDOM.render(<Counter/>, document.getElementById('app'))