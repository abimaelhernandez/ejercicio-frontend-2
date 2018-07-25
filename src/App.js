import React, { Component } from 'react'
import employees from './employees'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : []
    }
  }

deleteUser = (query) => {
    let removed = this.state.list.filter(item => item.id !== {query} );
    return removed
    console.log('ive been cliked')
}

componentDidMount(){
  this.setState({
    list: employees
  })
}

  render() {
    let list = this.state.list
    console.log('hello',this.state.list)
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
            {list.map(item => {
              return (
              <tr key={item.id}>
                <td>{item.age}</td>
                <td>{item.company}</td>
                <td>{item.email}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.salary}</td>
                <button onClick={this.deleteUser}>Delete user</button>
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
