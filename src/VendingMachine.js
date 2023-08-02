// VendingMachine.js file

import React from "react";
import { NavLink } from "react-router-dom";


const VendingMachine = () => {
    return (


                 <nav className="Navbar">
                    <div>
                        <NavLink exact to="/">Home</NavLink>
                    </div>

                    <div>
                        <NavLink exact to="/soda">Soda</NavLink>
                    </div>

                    <div>
                         <NavLink exact to="/chips">Chips</NavLink>
                    </div>
                    
                    <div>
                        <NavLink exact to="/freshsardines">Fresh Sardines</NavLink>    
                    </div>
                    
                </nav>     
    )
};


export default VendingMachine;