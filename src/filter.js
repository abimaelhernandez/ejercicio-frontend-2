import React,{ Component } from 'react';

export default class Filter extends Component {
  constructor(props){
  super(props)
    this.state = {
    people : []
    }
  }


//update component and rneder with out infinit loop
componentDidUpdate(){
  let people = this.state.people
  if(this.props.list !== people){
    this.setState({people: this.props.list})
  }
  console.log("before update",this.props.list);
  console.log("updated",this.state.people);
}

  render(){
    return(
    <div>
      <div className="input_filed">
        <input
          type="text"
          placeholder="enter data here"
          />
      </div>
      <div className="search_button">
        <button
        type="submit"
        >employess
      </button>
      </div>
    </div>
    )
  }
}
