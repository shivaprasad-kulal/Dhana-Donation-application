import React, { useState } from "react"
import './Search.css'
const Search = () => {
  const [users, setUsers] = useState([])

  const fetchData = e => {
    const query = e.target.value
    fetch(`http://192.168.43.226:80/receipt/${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  const fetchData1 = e => {
    const query = e.target.value
    fetch(`http://192.168.43.226:80/receipt/sh/${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  const fetchData2 = e => {
    const query = e.target.value
    fetch(`http://192.168.43.226:80/receipt/iva/${query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  return (
    
    <div className="app1">
      <div className="nav">
      <input onChange={fetchData} label="Search User" placeholder="search by receipt no" />
      <input onChange={fetchData1} label="Search User" placeholder="search by mobile no" />
      <input onChange={fetchData2} label="Search User" placeholder="search by name" />
      </div>
      <table>
  <caption><h1>Receipt list</h1></caption>

  <thead>
  <tr>
        <th>Receipt No</th>
        <th>Name</th>
        <th>Amount</th>
        </tr>
  </thead>
      <tbody>  
     
          {users.map(user => (
            <tr key={user.id}>
            <th key={user.id}>{user.receiptno}</th>
            <th key={user.id}>{user.name}</th>
            <th key={user.id}>{user.amount}</th>
            </tr>
          ))}
       
   
      </tbody>
      </table>
    </div>
  )
}

export default Search
