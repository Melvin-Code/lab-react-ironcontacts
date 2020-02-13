import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts'



let newCards = []
class App extends Component {
  state ={
    contactsState: contacts.slice(0, 5)

  }
  displayContacts=()=>{
    return this.state.contactsState.map((eachContact, index)=> {
      return(
        <tr key={index}>
          <th><img className='timage' src={eachContact.pictureUrl}/></th>
          <th>{eachContact.name}</th>
          <th>{eachContact.popularity}</th>
          <th><button onClick={() => this.iDeleteSpecificPeople(index)}>Delete</button></th>
        </tr>
      )
    })
  }
  iseeRandomPeople=()=>{
  let addedPeople = this.state.contactsState
  addedPeople.push(contacts[Math.floor(Math.random()*contacts.length)])
	this.setState(
      this.state.contactsState = addedPeople
      )

  }
  iSortRandomPeopleByName=()=>{
     let sorting = this.state.contactsState
  sorting.sort((a,b)=>
    a.name.localeCompare(b.name)
  )
	this.setState(
      this.state.contactsState = sorting
      )

  }
  iSortRandomPeopleByPopularity=()=>{
   let sorting = this.state.contactsState
  sorting.sort((a,b)=>
    a.popularity - b.popularity
  )
	this.setState(
      this.state.contactsState = sorting
      )

  }
  iDeleteSpecificPeople=(index)=>{
    let deleteThatMother = [...this.state.contactsState]
    deleteThatMother.splice(index,1)
this.setState(
      this.state.contactsState = deleteThatMother
      )
   
    
  }
  
  render() {
    return (
      <div className="App">
      <button onClick={this.iseeRandomPeople}>Add Random Contact</button>
      <button onClick={this.iSortRandomPeopleByName}>Sort by name</button>
      <button onClick={this.iSortRandomPeopleByPopularity}>Sort by popularity</button>
      <table>
                    <thead>
                        <tr>
                            <th>
                                Picture
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Popularity
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.displayContacts()}
                    </tbody>
       </table>
      </div>
    );
  }
}

export default App;
