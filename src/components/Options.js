import React from 'react'
import Option from './Option'

let count = 0;

const Options = (props) =>
   (
    <div>
      <button
      onClick={props.handleDeleteOptions}
      className="button--link"
      >
      Remove all
      </button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map(option => (
        <Option
          key={count++}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}/>))}
    </div>
  )

export default Options