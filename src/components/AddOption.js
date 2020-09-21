import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleAddOption =(e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    

    if (!error) {
      e.target.elements.option.value = ''
    }
    this.setState(() => ({ error }))
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