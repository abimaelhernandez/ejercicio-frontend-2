import React,{ Component } from 'react';

export default class Filter extends Component {
  constructor(props){
  super(props)
    this.state = {
    retrived: '',
    people : [],
    arrByID: []
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

//start with list retrived
filteredSearch (query){
  console.log(query);
  function isValue (value) {
    return value
  }
  //function to filter by company or name
  function filterById(item) {
    if(isValue(item.name) && item.name === query){
      return true
    }else if(isValue(item.company) && item.company === query){
      return true
    }else{
      console.log('check information can only look up by company or name of employee');
      return false
    }
  }
  this.setState({
    arrByID : this.state.people.filter(filterById)
  })
  console.log('filtered results are here', this.state.arrByID);
}
//used to fire filteredSearch
fireFilteredSearch = () =>{
  this.filteredSearch(this.state.retrived);
  this.setState({
    retrived:''
  })
}

updateSearch = (e) => {
  this.setState({ retrived : e.target.value })
}

  render(){
    return(
    <div>
      <div className="input_container">
        <input
          className="input_box"
          onChange={this.updateSearch}
          type="text"
          placeholder="enter data here"
          value={this.state.retrived}
          />
      </div>
      <div className="search_button_container">
        <button
          className="search_button"
          onClick={this.fireFilteredSearch}
          type="submit">
          employess
        </button>
      </div>
    </div>
    )
  }
}
