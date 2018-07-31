import React, { Component } from 'react'
import employees from './employees'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list : [],
    }
  }

  //initial state for0 the listl
  componentDidMount(){
    // this.setState({
    //   list: employees
    // })
    this.setState((state) => {
      //updatew salary in employee obj
      employees.map(obj => {
        return this.numToMoney(obj.salary)
        //this.numToMoney(employees.salary)
        //console.log('hola money',obj.salary)
        //set the employees prop on state to employeen obj
        //return state
      })
    })
  }

  //function for convert num to money
  numToMoney = (number) =>{
    let str = number.toString()

    let split = str.split('')

    split.splice(-3, 0, ',')

    let backToStr = split.join('')

    let num = ('$' + backToStr + '.' )
    let firstO = num.split('')

    firstO.splice(firstO.length,0,'0')

    let backFirst = firstO.join('')
    console.log(backFirst);
    return backFirst
  }

//numToMoney(16900)

//this deletes the user by using id of them
// deleteUser = (item) => {
//   console.log('this is the id',item.id);
//   let {list} = this.state
//   list.splice(item.id,1)
//   this.setState({
//     list : list
//   })
//    console.log('help me delete!!!', this.state.list);
// }

  render() {
    return (
      <div id='employees'> Hello world
      </div>
    )
  }
}

export default App;

//<table>
  // <tbody>
  //   <tr>
  //     <th>Age</th>
  //     <th>Company</th>
  //     <th>Email</th>
  //     <th>Id</th>
  //     <th>Name</th>
  //     <th>Phone</th>
  //     <th>Salary</th>
  //   </tr>
  //   {this.state.list.map(item => {
  //     return (
  //     <tr key={item.id}>
  //       <td>{item.age}</td>
  //       <td>{item.company}</td>
  //       <td>{item.email}</td>
  //       <td>{item.id}</td>
  //       <td>{item.name}</td>
  //       <td>{item.phone}</td>
  //       <td>{item.salary}</td>
  //       <a className="delete" onClick={this.deleteUser.bind(this,item)} href='#'>X</a>
  //     </tr>
  //   )
  //   })}
  // </tbody>
//</table>
