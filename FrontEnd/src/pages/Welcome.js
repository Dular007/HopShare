import React ,{useState}  from 'react';
import Login from '../components/Login';

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

import ReactCarousel from '../components/ReactCarousel'
import SignUp from '../components/SignUp';
const WelcomePage =() =>{
const [isloggedInMode, setisloggedInMode]=useState(true);
    

    return (
        <div>
          { isloggedInMode && <Login setLoginMode={setisloggedInMode}/>}
            {!isloggedInMode && <SignUp setLoginMode={setisloggedInMode}/>} 
            <ReactCarousel />
            {/* <Stack.Navigator>
             <Stack.Screen name="Home" component= { isloggedInMode && <Login setLoginMode={setisloggedInMode}/>}/>
      <Stack.Screen name="Notifications" component= {!isloggedInMode && <SignUp />}  />
    </Stack.Navigator> */}
        </div>
        
    )
}


export default WelcomePage;