// VendingMachine.js file

import React from "react";
import { NavLink, Link } from "react-router-dom";
import './VendingMachine.css';

const VendingMachine = () => {

    const IMAGE = "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*"
    return (
            <div className="vendingHome">
            

                <h1 className="greeting">hello i am a vending machine. what would you like to eat?</h1>
            
                <div className="vendingNavItem">
                    
                    <div>
                       <Link exact to="/soda">Soda</Link>
                    </div>

                    <div>
                         <Link exact to="/chips">Chips</Link>
                    </div>

                    <div>
                        <Link exact to="/freshsardines">Fresh Sardines</Link>    
                    </div>
                </div>
                  
            </div>              
    )
};


export default VendingMachine;