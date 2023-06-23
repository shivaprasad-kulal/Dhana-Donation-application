import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import './View.css';


function View() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([])
  const [totalSum, setTotalSum] = useState(0);

  const fetchData = () => {
    fetch(`http://192.168.43.226:80/receipt`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const fetchUserData = () => {
    fetch("http://192.168.43.226:80/receipt")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const total = users.reduce((acc, row) => acc + row.amount, 0);
    setTotalSum(total)
  }, [data]);

  return (
    <div className="main">
    <div className="apps">
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
      <table class="table">
        <td><b className="number"> ToTAL= {totalSum} Rs</b></td>
      </table>
    </div>
    </div>
  );
}

export default View;