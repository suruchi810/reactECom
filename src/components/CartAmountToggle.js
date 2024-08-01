import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
export default function({amount, setDecrease, setIncrease}){
    return (
        <div className="cart-button">
            <div className="amount-toggle">
                <button onClick={()=>setDecrease()}>
                    <FaMinus/>
                </button>
                <div className="amount-style">{amount}</div>
                <button onClick={()=>setIncrease()}>
                    <FaPlus/>
                </button>
            </div>
        </div>
    )
}