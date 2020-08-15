import React from "react";
import Sidebar from "react-sidebar";
 
const SideDrawer =(props)=> {
 

    return (
      <Sidebar
        sidebar={<h4><b>RIDE</b></h4>}
        // children={<img class="img-responsive img-rounded" src="images/user_image.png"/>}
        open={props.drawerIsOpen}
        onSetOpen={props.setDrawerIsOpen}
        styles={{ sidebar: { background: "white",width:"250px" } }}
      >
          
      
      </Sidebar>
    );
  
}
 
export default SideDrawer;