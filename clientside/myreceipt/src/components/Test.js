import { useState } from "react";
import React from "react";
import "./Test.css";

function Test() {

  const [receiptno, setReceiptno] = useState("");

  const [contactno, setContactno] = useState("");
  const [name, setName] = useState("");
  const [amount,setAmount]= useState("");

  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://192.168.43.226:80/receipt", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          receiptno:receiptno,
          contactno:contactno,
          name:name ,
          amount:amount
        }),
      });
      
      let resJson = await res.json();
      //console.log(resJson)
      
      if (res.status === 200) {
        setReceiptno("");
        setName("");
        setAmount("");
        setContactno("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      setMessage("Please enter valid data");
      console.log(err);
    }
  };

  return (
   
    <div className="App22">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={receiptno}
          placeholder="Receipt number"
          onChange={(e) => setReceiptno(e.target.value)}
        />
        <input
          type="tel"
          value={contactno}
          placeholder="Mobile number"
          pattern="[0-9]{10}"
          onChange={(e) => setContactno(e.target.value)}
        />
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e)=>setAmount(e.target.value)}
        />

        <button type="submit" className="btn">SUBMIT</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
   
  );
}

export default Test;