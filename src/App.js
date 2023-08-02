// App.js file

import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';
import { NavLink } from "react-router-dom";
import { Route, BrowserRouter, useHistory, useLocation} from 'react-router-dom'
import Soda from './Soda';
import Chips from './Chips';
import Freshsardines from './Freshsardines';

function App() {

  const history = useHistory();
  const location = useLocation();

  const handleSubmit = () => {
    history.goBack()
  }
  return (
    
    <main className='appdiv'>
         
         {/* <BrowserRouter> */}

              {location.pathname === "/" && <VendingMachine/>}
              
             
              <Route exact path="/soda">
                <Soda/>
              </Route>
              
              <Route exact path="/chips">
                <Chips/>
              </Route>
              
              <Route exact path="/freshsardines">
                <Freshsardines/>
              </Route>
              
            
              
              {/* shows the button if the path is not home */}
              {location.pathname !=="/" && <button onClick={handleSubmit}> Go Back</button>}

         {/* </BrowserRouter> */}
    </main>  
   
  );
}

export default App;
