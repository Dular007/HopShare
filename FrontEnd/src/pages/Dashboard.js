import React from 'react';
import ReactCarousel from '../components/ReactCarousel';
import RideInfo from '../components/RideInfo';

const Dashboard =()=>{
    return(
        <div className="dashboard">
       {/* <div className="dashboard-ride"> */}
       <RideInfo />
       {/* </div> */}
        
        {/* </div> */}
        <ReactCarousel />
        </div>
    )
}

export default Dashboard;