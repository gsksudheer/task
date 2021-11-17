import axios from "axios";
import React, { useEffect, useState } from "react";



//Components
import Navbar from "./components/navbar";
import Header from "./components/header";
import Profile from "./components/profile.component";
import Info from "./components/infolist.component";


//Axios default settings
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";


function App() {
    const [user, setUser] = useState([]);
    
      console.log(user);

    useEffect (() => {
        const requestUserData = async () => {
            const getUserData = await axios.get("https://jsonplaceholder.typicode.com/users");
            console.log("request");
            setUser(getUserData.data);
            console.log(getUserData);
        }
        requestUserData();
    }, []);
    return (
       <>
            <div className="bg-green-900 w-full h-full flex ">
                <div className="w-80">
                    <Info />
                </div>
                <div className="bg-gray-50 my-3 mx-5 rounded-xl w-full">
                    <div>
                        <Navbar />
                    </div>
                    <hr className="mx-3"/>
                    <div className="mt-3">
                        <Header />
                    </div>
                    <div className="mx-5 mt-8 ml-20 flex flex-wrap items-center gap-10">
                        {
                            user.map((data) => (
                                <Profile {...data}/>
                               
                            ))
                        }
                    </div>
                </div>
            </div>
       </>  
    )      
};

export default App;