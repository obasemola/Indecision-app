import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal'



export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleClearSelectedOption = () => {
    this.setState((prevstate) => ({selectedOption: undefined}))
  }
  
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter(option => option !== optionToRemove)
     }))
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }))
  }

  handlePick = () => {
    const pick = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[pick];
    this.setState(() => ({selectedOption: option}))
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid option'
    } else if (this.state.options.indexOf(option) > -1){
      return 'This option already exists'
    } else {
      this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
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

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header 
          title={title}
          subtitle={subtitle}
        />

        <div className="container">
          <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
          />

          <div className="widget">
            <Options
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteOptions={this.handleDeleteOptions}
            options={this.state.options}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal handleClearSelectedOption={this.handleClearSelectedOption} selectedOption={this.state.selectedOption}/>
      </div>
    )
  }
}