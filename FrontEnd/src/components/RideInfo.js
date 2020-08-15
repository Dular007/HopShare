import React ,{ useState } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/components/NavLink.css'
import SideDrawer from './SideDrawer'

const RideInfo =()=>{
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer =()=>{
        setDrawerIsOpen(true)
    }
    const closeDrawer =()=>{
        setDrawerIsOpen(false)
    }
return(
    
    <div  className="nav-header">
        <SideDrawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
        {/* <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button> */}
         <a id="show-sidebar" class="btn btn-sm btn-dark" href="#" onClick={openDrawer}>
                    <i class="fa fa-bars"></i>
                  </a>

    <ul className="nav-links">

    <li>
      Rides
    </li>
    {/* <li>
        {
        <NavLink to='/u1/places'>MY PLACES</NavLink>}
    </li>
    <li>
    {
        <NavLink to='/place/new'>ADD PLACES</NavLink>}
    </li>
    <li>
    {
        <NavLink to='/auth'>AUTHENTICATE</NavLink>}
    </li> */}

 </ul>

 {/* <SideDrawer /> */}
 </div>
)
}


export default RideInfo;