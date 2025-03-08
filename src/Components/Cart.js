import React from "react";
import { Table, TableContainer,TableRow, TableCell, TableHead, TableBody, Button} from "@mui/material";
import { useState } from "react";

const Cart = ({ cartItems }) => {
const [quantity,setQuantity]=useState(
    cartItems.reduce((acc,product)=>{
        acc[product.id]=1;
        return acc;
    },{}
    )
);

const updateQuantity =(id,change) =>{
   
setQuantity((prev)=>({
    ...prev,
    [id]:Math.max(1,(prev[id]||1)+ change),
}));

};

  return (
    <div>
        <h2>Shopping Cart</h2>
        <TableContainer>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Items</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
    {  (cartItems.map((product)=>(
            
                    <TableBody key={product.id}>
                        <TableCell>
                            <div style={{display:"flex"}}>
                                <img src={product.thumbnail} alt={product.title} width="100" />
                                <p>{product.title}</p>
                            </div>
                        </TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>
                            <div>
                                <Button variant="outlined" onClick={()=>updateQuantity(product.id,-1)}>-</Button>
                                <span style={{ margin: "0 10px" }}>{quantity[product.id]}</span>
                                <Button variant="outlined" onClick={()=>updateQuantity(product.id,1)}>+</Button>

                            </div>
                        </TableCell>
                        <TableCell>{(product.price*quantity[product.id].toFixed(2))}</TableCell>


                    </TableBody>
                )))
            }
        
                </Table>

            </TableContainer>
          
       
    </div>
  );
};

export default Cart;
