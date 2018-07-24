import React, { Component } from 'react'
import employees from './employees'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : []
    }
  }

deleteUser = () => {
  console.log('hey D474 i was clicked ');

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
      <div id='employees' > Hello world
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Points</th>
            </tr>
            {list.map(item => {
              return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <button onClick={this.deleteUser}>clik me!</button>
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
