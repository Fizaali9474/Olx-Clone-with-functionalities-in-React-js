 import React from "react";
 import { useNavigate } from "react-router-dom";
 import "./App.css"

function Card({ title, description, price, id, img }) {
  const navigate = useNavigate();

 return (
  // <div className="main">
      <div className="col-md-3 mb-4  cards" >
     <div className="card" onClick={() => navigate(`detailfb/${id}`)}
      style={{ width:"170px"  }}>
        <img  src  ={img} className="card-img-top" alt="..." />
        <div className="card-body">
        <div className="titleDiv">
       <h5 className="card-title">{price}</h5>
       <i className="fa-regular fa-heart "></i>
       </div>
       <br></br>
    <h6 className="card-subtitle mb-2 text-body-secondary">{description}</h6>

    <p className="card-text text-body-secondary m-0">Karachi, Pakistan</p>
    <p className="card-text text-body-secondary">8 days ago</p>
    <p style={{backgroundColor:"black" , color:"white" , fontFamily:"40px" ,
     height:"30px"}}>Add To Cart</p>
         </div>
       </div>
       </div>
//  </div>
  );
 }

 export default Card;



