import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Home.css";
import p1 from "./p1.jpeg"
const Home = () => {
    const navigate=useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
          navigate('/View');
    };
    const handleSubmit1 = event => {
      event.preventDefault();
      navigate('/Test');
  };
  const handleSubmit2 = event => {
    event.preventDefault();
    navigate('/Search');
};
    return (
        
    <div className="app">
      
      <div className="head">
        <h2>ಶ್ರೀ  ಮುಖ್ಯಪ್ರಾಣ ಸ್ವಾಮಿ ದೇವಸ್ಥಾನ</h2>
        <div className="container">
          <img src={p1} alt="image" className="image"></img>
        </div>
      </div>
      <p>'DHANA' Dashboard</p>
      <div className="dashboard">
    <form onSubmit={handleSubmit}>
        <button className="btn"type="submit">View</button>
    </form>
    <form onSubmit={handleSubmit1}>
      
      <button type="submit" className="btn">Add receipt</button>
    </form>
    <form onSubmit={handleSubmit2}>
      <button type="submit" className="btn">Search</button>
    </form>
    </div>
    </div>
    );
    };
    export default Home;