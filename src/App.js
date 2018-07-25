import React, { Component } from 'react'
import employees from './employees'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : []
    }
  }
//this deletes the user by using id of them
deleteUser = (item) => {
  console.log('this is the id',item.id);
  let {list} = this.state
  list.splice(item.id,1)
  this.setState({
    list : list
  })
   console.log('help me delete!!!', this.state.list);
}
//initial state for the list
componentDidMount(){
  this.setState({
    list: employees
  })
}

  render() {
    console.log('ive been cliked',this.state.list)
    return (
      <div id='employees'> Hello world
        <table>
          <tbody>
            <tr>
              <th>Age</th>
              <th>Company</th>
              <th>Email</th>
              <th>Id</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Salary</th>
            </tr>
            {this.state.list.map(item => {
              return (
              <tr key={item.id}>
                <td>{item.age}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.salary}</td>
                <button className="delete" onClick={this.deleteUser.bind(this,item)}>Delete</button>
              </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
