import React, { useContext } from "react";
import './Cart.css'
import { StoreContex } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = ()=>{

    const {cartItems,food_list,removeFromCart,getTotalCratAmount} = useContext(StoreContex);

    const navigate = useNavigate();

    return(
        <div className="cart">
            <div className="cart-items">
                <div className="cart-item-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item,index)=>{
                    if(cartItems[item._id]>0)
                    {
                        return(
                            <div>
                            <div className="cart-item-title cart-items-item">
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>${item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${item.price*cartItems[item._id]}</p>
                                <p onClick={()=>removeFromCart(item._id)} className="cross">x</p>
                                </div>
                                <hr/> 
                            </div>     
                        )
                    }
                })}
            </div> 
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCratAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalCratAmount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>${getTotalCratAmount()===0?0:getTotalCratAmount()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHHECKOUT</button>
                </div>
                <div className="cart-prommocode">
                    <div>
                        <p>If you have a promo code you enter here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="promo-code" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart