import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography,  Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const ProductList = ({setCartItems}) => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();

  const handleBuyNow=(product)=>{
    setCartItems((prevCart)=>[...prevCart,product]);
    navigate("/Cart");
   
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []); 

  return (
    <div>
     <Navbar />
      
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center",marginTop:"20px" }}>
      { (
        products.map((product) => (
          <Card  sx={{
            width: 250, 
            height: 400, 
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",}}  >
          <CardMedia>          
            <img src={product.thumbnail} alt={product.title} width="100" />
          </CardMedia>
          <CardContent style={{minHeight:"100px"}}>
            <Typography>
            <div key={product.id}>
            <h3>{product.title}</h3>
            <Typography
      variant="body2"
      color="textSecondary"
      sx={{
        display: "-webkit-box",
        WebkitLineClamp: 4, 
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {product.description}
    </Typography>
            
          </div>
          </Typography>
          </CardContent>
          <div style={{ padding: "16px", borderTop: "1px solid #ddd", display: "flex" , minHeight: "30px", justifyContent:"space-between" }}>
            <Typography variant="body1" fontWeight="bold">Price: $19.99</Typography>
            <Button variant="contained" onClick={()=> handleBuyNow(product)}>Buy Now</Button>
          </div>

          </Card>
        ))
      )}
      </div>
    </div>
  );
};

export default ProductList;
