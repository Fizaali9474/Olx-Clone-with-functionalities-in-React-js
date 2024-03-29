import React from "react";
import { useState, useEffect } from "react";
import Header from "../Header/index";
import Category from "../Category/index";
import Footer from "../Footer/index";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getForm } from "../../config/Firebase";
import Card from "../Card";

import "./index.css";

function Dashboardfb() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState("null");
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {

        setUser(user);

      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const form = await getForm();
    setProducts(form);
  };
  return (
    <div className="main">
      <Header />
      <Category />
      <div>
        {user ?
          <h3>{user.email}</h3>

          :
   <button style={{backgroundColor:"red" , color:"black" , fontSize:"20px" }} onClick={() => navigate
   ("/login")}>Please Login!</button>}
      </div>


      <div className="container-fluid text-center">
        <div className="row">
        

            {products.map((item) => (
              < Card
                id={item.id}
                name={item.title}
                brand={item.brand}
                description={item.description}
                price={item.price}
                category={item.category}
                img={item.imageUrl}  
           
              />
              ))}

            
   {   /*     <button onClick={() => navigate(`/detailfb/${item.id}`)}></button>*/}
       
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Dashboardfb;
