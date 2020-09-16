import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';



export default class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick =  this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount(){

    try{ 
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options){
        this.setState(() => ({ options }));
      }
    } catch (err) {

    }


  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  };

  componentWillUnMount(){

  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
     }))
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: [] }))
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
      this.setState((prevState) => ({ options: prevState.options.concat(option) }))
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

          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}