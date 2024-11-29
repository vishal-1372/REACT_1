import React, { useContext } from "react";
import './PlaceOrder.css'
import StoreContexProvider, { StoreContex } from "../../context/storeContext";

const PlaceOrder = ()=>{

    const {getTotalCratAmount} = useContext(StoreContex);

    return(
        <form className="Placeorder">
            <div className="palce-order-left">
                <p className="title">Delivery Information</p>
                <div className="malti-fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Street"/>
                <div className="malti-fields">
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="State"/>    
                </div>
                <div className="malti-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Contry" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>
            <div className="place-order-right">
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
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>

        </form>
    )
}
export default PlaceOrder